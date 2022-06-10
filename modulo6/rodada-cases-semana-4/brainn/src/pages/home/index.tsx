import * as React from "react";
import { Box, Button, Typography } from "@mui/material";
import { newDate } from "constants/formatDate";
import UseRequestData from "hooks/UseRequestData";
import {
  BoxLotterie,
  BoxNumbers,
  buttonNumber,
  Container,
  formStyle,
  GroupLotterie,
} from "./style";
import clover from "assets/clover.svg";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Home = () => {
  const [data] = UseRequestData([], "/loterias");
  const [contests] = UseRequestData([], "/loterias-concursos");
  const [lotteries, setLotteries] = React.useState(0);

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

  return (
    <Container>
      <GroupLotterie color={lotterieName?.[0]?.nome}>
        <Box>
          <FormControl sx={formStyle} size="small">
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={lotteries}
              onChange={handleChange}
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
          <Typography color="#fff" variant="h4" fontWeight="bold">
            {lotterieName?.[0]?.nome === undefined ? (
              <Typography color="#fff" variant="h4" fontWeight="bold">
                MEGA-SENA
              </Typography>
            ) : (
              lotterieName?.[0]?.nome.toUpperCase()
            )}
          </Typography>
        </BoxLotterie>

        <Box>
          <Typography color="#fff" variant="h6">
            CONSURSO
          </Typography>
          <Typography color="#fff" variant="h6" fontWeight="bold">
            {contest.id} - {newDate(contest.data)}
          </Typography>
        </Box>
      </GroupLotterie>

      <BoxNumbers>
        <div></div>
        <div className="button">
          {contest.numeros &&
            contest.numeros?.map((numbers: number[]) => {
              return (
                <Button sx={buttonNumber} key={Math.random()}>
                  {numbers}
                </Button>
              );
            })}
        </div>
        <div>
          <Typography margin="15px 0px 0px 15px">
            Este sorteio é meramente ilustrativo e não possui nenhuma ligação
            com a CAIXA.
          </Typography>
        </div>
      </BoxNumbers>
    </Container>
  );
};
export default Home;
