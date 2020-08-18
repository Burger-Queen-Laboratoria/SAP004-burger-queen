import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
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

  main {
    height: 100vh;
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

const alignItemsAndJustifyCenter = `
  align-items: center;
  justify-content: center;
`;

const styleBoxMenuProducts = `
  border: 2px solid #A04835;
  border-radius: 5px;
  margin: 2px;
  text-align: center;
  background-color: rgba(160, 72, 53, 0.4);
  font-family: "helvetica";
  padding: 2px;
`;

export const StyleInput = styled.input`
  height: 70px;
  width: ${(props) => (props.width ? "30%" : "60%")};
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
  width: ${(props) => (props.width ? "70%" : "20%")};
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
  margin-top: 5px;
  width: 160px;
`;

export const StyleSection = styled.section`
  ${displayFlexAndColumn}
  text-align: center;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 50px);
`;

export const StyleForm = styled.form`
  ${displayFlexAndColumn}
  align-items: center;
  width: 100%;
`;

export const NewMember = styled.p`
  margin: 2px;
  ${fontSizeAndFamily}
`;

export const RegisterMember = styled.p`
  margin: 2px;
  font-weight: bold;
  cursor: pointer;
  ${fontSizeAndFamily}
  text-decoration: none;
`;

export const StyleError = styled.p`
  margin: 4px;
  color: darkred;
  ${fontSizeAndFamily}
`;

export const CheckboxRegister = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

export const CheckboxLabel = styled.label`
  &:before {
    content: "";
    width: ${(props) => (props.width ? props.width : "30px")};
    height: ${(props) => (props.height ? props.height : "30px")};
    display: inline-block;
    border: solid 1px #a04835;
    border-radius: 5px;
    box-sizing: border-box;
    background-color: ${(props) => (props.checked ? props.color : "white")};
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
  flex-direction: ${(props) => (props.direction ? props.direction : null)};
  align-items: center;
  justify-content: space-evenly;
  width: 85%;
  font-size: ${(props) => (props.fontsize ? props.fontsize : "30px")};
  font-family: "helvetica";

  @media (max-width: 400px) {
    font-size: 20px;
  }
`;

export const BtnsRegisterContainer = styled.p`
  margin: 2px;
  width: 85%;
  justify-content: center;
  ${displayFlexAndRow}
  ${fontSizeAndFamily}
`;

export const Title = styled.h1`
  ${fontSizeAndFamily}
  font-weight: bold;
  margin: 0px;
  margin-bottom: 15px;
`;

export const RegisterTitleFlex = styled.div`
  margin: 20px 0px;
  display: flex;
  ${alignItemsAndJustifyCenter}
`;

export const ImgLogoRegister = styled.img`
  width: 20%;
`;

export const MenusContainer = styled.div`
  display: ${(props) => props.display};
  ${alignItemsAndJustifyCenter}

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

export const ItensContainer = styled.div`
  width: 100%;
`;

export const MenusImg = styled.img`
  width: 100%;
  padding: 0;
  margin: 0;
`;

export const StyleFigure = styled.figure`
  text-align: center;
  margin: 0px;
  & [aria-current] {
    border-bottom: solid rgba(160, 72, 53, 0.7);
    border-width: 0.3em;
    padding-bottom: 0.3em;
  }
`;

export const ContainerSection = styled.section`
  ${displayFlexAndColumn}
  padding-top: 3em;
`;

export const FlexUmContainer = styled.div`
  ${displayFlexAndColumn}
  align-items: center;
  text-align: center;
  flex: 1;
  flex-grow: 1;
`;

export const StyleSectionMenu = styled.section`
  width: ${(props) => props.width};

  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const StyleAsideMenu = styled.aside`
  display: ${(props) => props.display};
  width: 30%;
  justify-content: center;
  align-items: start;

  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const StyleDivMenu = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;

  @media (max-width: 400px) {
    ${displayFlexAndColumn}
  }
`;

export const StyleDivProducts = styled.div`
  ${displayFlexAndColumn}
  width: 100%;
  flex-flow: wrap;
`;

export const StyleDivItensMenu = styled.div`
  ${displayFlexAndColumn}
  ${alignItemsAndJustifyCenter}
  width: 22%;
  ${styleBoxMenuProducts}

  @media (max-width: 400px) {
    width: 28%;
  }
`;

export const StyleImgDeleteIcon = styled.img`
  width: 30px;
  cursor: pointer;
`;

export const StylePResume = styled.p`
  display: flex;
  ${alignItemsAndJustifyCenter}
  margin: 1px;
`;

export const StyleDivResume = styled.div`
  ${displayFlexAndColumn}
  ${alignItemsAndJustifyCenter}
  width: 90%;
  ${styleBoxMenuProducts}
`;

export const StyleItensResume = styled.div`
  background-color: rgba(160, 72, 53, 0.7);
  border-radius: 2px;
  padding: 5px;
  width: 80%;
  margin-bottom: 5px;
`;

export const StyledNavKitchen = styled.nav`
  display: flex;
  justify-content: space-around;
  height: 90px;
  background-color: white;
  padding: 10px;
`;

export const StyledNavImg = styled.img`
  width: 50px;

  @media (max-width: 400px) {
    width: 45px;
  }
`;

export const StyleNavDiv = styled.div`
  text-align: center;
  & [aria-current] {
    border-bottom: solid rgba(160, 72, 53, 0.7);
    border-width: 0.3em;
    padding-bottom: 0.3em;
  }
`;

export const StyleNavP = styled.p`
  font-family: ${(props) => (props.queen ? "Burger Queen" : "helvetica")};
  font-size: ${(props) => (props.queen ? "18px" : "16px")};
  margin: ${(props) => (props.queen ? "5px 0px" : "10px 0px")};
  font-weight: bold;

  @media (max-width: 400px) {
    font-size: ${(props) => (props.queen ? "14px" : "12px")};
  }
`;

export const TagTitleKitchen = styled.h6`
  font-family: "Burger Queen";
  text-align: center;
  font-size: 50px;
  margin: 10px;
`;

export const StyleTagUl = styled.ul`
  list-style: none;
  font-family: "helvetica";
  padding: 0;
  margin: 0;
  width: 80%;

  & li {
    border: 1px solid #c4c4c4;
    background-color: #a04835;
  }

  & section {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

export const StyleTagSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const StyleHeader = styled.header`
  display: flex;
  width: 80%;
  justify-content: space-around;
  background-color: #c4c4c4;
  font-family: "helvetica";
  font-weight: bold;
  font-size: 18px;

  @media (max-width: 400px) {
    font-size: 14px;
    text-align: center;
    align-items: center;
  }
`;

export const StyleTagDiv = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: ${(props) => (props.color ? props.color : null)};
`;

export const StyleSectionOrder = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const StyleButtonOrder = styled.button`
  height: 50px;
  background-color: #fed08f;
  border: none;
  font-weight: bold;
  border-radius: 3px;
  box-shadow: 1px 1px 2px black;
  cursor: pointer;
`;

export const StyleFooter = styled.footer`
  display: flex;
  ${alignItemsAndJustifyCenter}
  height: 30px;
  font-family: "helvetica";
  padding: 10px;
  color: #a04835;

  @media (max-width: 400px) {
    font-size: 12px;
  }
`;

export const StylePFooter = styled.p`
  margin: 0px 7px;
`;

export const StyleTagA = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: #a04835;
`;

export const StyleLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const StyleDivMainHeight = styled.div`
  min-height: calc(100vh - 50px);
`;
