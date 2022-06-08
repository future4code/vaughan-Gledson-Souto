import { Box } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 500px 1fr;
  align-items: center;
  justify-items: center;
`;
export const GroupLotterie = styled(Box)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #6befa3;
`;
export const BoxLotterie = styled(Box)`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const buttonNumber = {
  minWidth: "60px",
  minHeight: "60px",
  borderRadius: "50%",
  backgroundColor: "#fff",
  margin: "15px 0px 0px 15px",
  '&:hover':{
    backgroundColor: "#fff",
  }
};
