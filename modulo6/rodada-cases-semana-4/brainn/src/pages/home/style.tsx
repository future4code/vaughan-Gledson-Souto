import { Box } from "@mui/material";
import styled from "styled-components";

const colorType: any = (color: string) => {
  switch (color) {
    case "mega-sena":
      return "#6befa3";
    case "quina":
      return "#8666ef";
    case "lotofácil":
      return "#dd7ac6";
    case "lotomania":
      return "#ffab64";
    case "timemania":
      return "#5aad7d";
    case "dia de sorte":
      return "#bfaf83";
    default:
      return "#6befa3";
  }
};

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 500px 1fr;
  align-items: center;
  justify-items: center;

  @media screen and (min-width: 50px) and (max-width: 699px) {
    grid-template-columns: 1fr;
  }
  @media screen and (min-width: 700px) and (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }
 
`;

export const GroupLotterie = styled(Box)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ color }) => colorType(color)};
`;

export const formStyle = {
  m: 1,
  minWidth: 150,
  backgroundColor: "#fff",
  borderRadius: "5px",
  "&:hover": {
    border: "0px solid transparent",
  },
};

export const BoxLotterie = styled(Box)`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const BoxNumbers = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const buttonNumber = {
  color: "#000",
  minWidth: "70px",
  minHeight: "70px",
  borderRadius: "50%",
  backgroundColor: "#fff",
  margin: "15px 0px 0px 15px",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#fff",
  },
};
