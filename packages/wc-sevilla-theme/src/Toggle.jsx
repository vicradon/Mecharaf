import React from "react";
import { connect, styled } from "frontity";

const Toggle = ({ actions, state }) => {
  const { setLightMode, setDarkMode } = actions.theme;
  const { mode } = state.theme;
  return (
    <Container>
      <ButtonsStyled isSelected={mode === "light"} onClick={setLightMode}>
        Light
      </ButtonsStyled>
      <ButtonsStyled isSelected={mode === "dark"} onClick={setDarkMode}>
        Dark
      </ButtonsStyled>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const ButtonsStyled = styled.button`
  padding: 10px;
  border: 0;
  background-color: ${({ isSelected }) => (isSelected ? "#ccc" : "#fff")};
`;

export default connect(Toggle);
