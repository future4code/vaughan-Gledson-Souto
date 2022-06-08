import * as React from "react";
import { Box, Button, Typography } from "@mui/material";
import { newDate } from "constants/formatDate";
import UseRequestData from "hooks/UseRequestData";
import { BoxLotterie, buttonNumber, Container, GroupLotterie } from "./style";
import clover from "assets/clover.svg";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Home = () => {
  const id = React.useId();
  const [data] = UseRequestData([], "/loterias");
  const [contests] = UseRequestData([], "/loterias-concursos");
  const [lotteries, setLotteries] = React.useState("");

  // filtrando por id da loteria-concourso com id selecionado no form select
  const contestId =
    contests &&
    contests?.filter((lotterie: any) => lotteries === lotterie.loteriaId);

  const [contest] = UseRequestData(
    [],
    `/concursos/${
      contestId?.[0]?.concursoId === undefined
        ? 2359
        : contestId?.[0]?.concursoId
    }`
  );

  const handleChange = (e: any) => {
    setLotteries(e.target.value);
  };

  const lotterieName =
    data && data?.filter((lotterie: any) => lotteries === lotterie.id);

  console.log("lotteries", contests);

  return (
    <Container>
      <GroupLotterie>
        <Box>
          <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
            <InputLabel id="demo-select-small">loterias</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={lotteries}
              label="loterias"
              onChange={handleChange}
              defaultValue={data?.[0]?.nome}
            >
              {data &&
                data.map((lotterie: any) => {
                  return (
                    <MenuItem key={lotterie.id} value={lotterie.id}>
                      {lotterie.nome.toUpperCase()}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
        </Box>
        <BoxLotterie>
          <img src={clover} alt="trevo" />
          <Typography>
            {lotterieName?.[0]?.nome === undefined ? (
              <Typography>MEGA-SENA</Typography>
            ) : (
              lotterieName?.[0]?.nome.toUpperCase()
            )}
          </Typography>
        </BoxLotterie>

        <Box>
          <Typography variant="h6">CONSURSO</Typography>
          <Typography variant="h6" fontWeight="semi-bold">
            {contest.id} - {newDate(contest.data)}
          </Typography>
        </Box>
      </GroupLotterie>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <div>
          {contest.numeros &&
            contest.numeros?.map((numbers: number[]) => {
              return (
                <Button sx={buttonNumber} key={id}>
                  {numbers}
                </Button>
              );
            })}
        </div>
      </Box>
    </Container>
  );
};
export default Home;
