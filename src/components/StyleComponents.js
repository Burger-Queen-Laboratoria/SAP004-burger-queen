import styled, { createGlobalStyle } from "styled-components";
import BurgerQueen from "../img-documents/Making-Lettering-Tall_demo.ttf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Burger Queen';
    src: url(${BurgerQueen});
  }

  html {
    height: 100%;
    width: 100%;
    touch-action: auto;
  }

  body {
    background-color: #FED08F;
    height: 100%;
    width: 100%;
    margin: 0px;
  }
`;

const borderAndRadius = `
  border: 1px solid #A04835;
  border-radius: 5px;
`;

const displayFlexAndColumn = `
  display: flex;
  flex-direction: column;
`;

const displayFlexAndRow = `
  display: flex;
  flex-direction: row;
`;

const fontSizeAndFamily = `
  font-size: 30px;
  font-family: "helvetica";

  @media(max-width: 400px) {
    font-size: 20px;
  }
`;

export const StyleInput = styled.input`
  height: 70px;
  width: 60%;
  margin: 10px;
  font-size: 20px;
  outline: none;
  color: #a04835;
  ${borderAndRadius}

  &::placeholder {
    color: #a04835;
  }

  @media (max-width: 400px) {
    height: 50px;
    width: 85%;
  }
`;

export const StyleButton = styled.button`
  height: 50px;
  width: 20%;
  margin: 5px;
  background-color: #a04835;
  color: black;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  ${borderAndRadius}
  @media(max-width: 400px) {
    height: 40px;
    width: 40%;
  }
`;

export const TitleLogo = styled.p`
  font-family: Burger Queen;
  font-size: ${(props) => (props.size ? "80px" : "70px")};
  margin: 5px;

  @media (max-width: 400px) {
    font-size: ${(props) => (props.size ? "60px" : "45px")};
  }
`;

export const ImgLogo = styled.img`
  margin-top: 30px;
  width: 30%;
`;

export const StyleSection = styled.section`
  ${displayFlexAndColumn}
  text-align: center;
  align-items: center;
  width: 100%;
`;

export const StyleForm = styled.form`
  ${displayFlexAndColumn}
  align-items: center;
  width: 100%;
`;

export const NewMember = styled.p`
  margin: 10px;
  ${fontSizeAndFamily}
`;

export const RegisterMember = styled.p`
  margin: 10px;
  font-weight: bold;
  cursor: pointer;
  ${fontSizeAndFamily}
`;

export const StyleError = styled.p`
  color: darkred;
  ${fontSizeAndFamily}
`;

export const CheckboxRegister = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

export const CheckboxLabel = styled.label`
  &:before {
    content: "";
    width: 30px;
    height: 30px;
    display: inline-block;
    border: solid 1px #a04835;
    border-radius: 5px;
    box-sizing: border-box;
    background-color: ${(props) => (props.checked ? "#A04835" : "white")};
  }

  @media (max-width: 400px) {
    &:before {
      width: 20px;
      height: 20px;
    }
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 85%;
  ${fontSizeAndFamily}
`;

export const BtnsRegisterContainer = styled.p`
  width: 85%;
  justify-content: center;
  ${displayFlexAndRow}
  ${fontSizeAndFamily}
`;

export const Title = styled.h1`
  ${fontSizeAndFamily}
  font-weight: bold;
`;

export const RegisterTitleFlex = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImgLogoRegister = styled.img`
  width: 20%;
`;

export const Navibar = styled.div`
  align-items: center;
  background-color: white;
  height: 5rem;
  justify-content: space-between;
  padding: 2em;
  width: 100%;
  ${displayFlexAndRow};
`;
export const IconsNavBar = styled.img`
  margin-top: 1em;
  margin-bottom: 1em;
  width: 60px;
  height: 60px;
  ${displayFlexAndRow};
`;

export const ImgText = styled.p`
  font-family: ${(props) => props.fonte};
  font-size: ${(props) => props.size};
  font-weight: bold;
`;

export const LoungeSection = styled.section`
  align-items: center;
  justify-content: center;
  ${displayFlexAndColumn}
`;

export const MenusContainer = styled.div`
  display: ${(props) => props.display};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justfy};
  width: ${(props) => props.wid};
  flex: 1;
  padding-top: 4em;
`;

export const ItensContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const MenusImg = styled.img`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
`;

export const StyleButtonM = styled.button`
  background-color: #a04835;
  color: black;
  font-size: 1em;
  font-weight: bold;

  padding: 1em;
  cursor: pointer;
  ${borderAndRadius}
`;

export const UlStyle = styled.ul`
  display: flex;
  flex-direction: row;
  background-color: #a04835;
  padding: 1em;
  font-weight: bold;
  list-style-type: none;
  margin: 0;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const ContainerTh = styled.div`
  display: flex;
  flex-direction: row;
  background-color: rgb(196, 196, 196);
  border: solid black 2px;
  padding: 1em;
  font-weight: bold;
  list-style-type: none;
  flex: 1;
`;

export const ContainerSection = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 3em;
`;
