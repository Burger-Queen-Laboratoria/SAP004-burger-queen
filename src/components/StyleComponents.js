import styled from "styled-components";

const borderRadiusAndNone = `
  border: none;
  border-radius: 10px;
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
    font-size: 20px
  }
`;

export const StyleInput = styled.input`
  height: 70px;
  width: 60%;
  margin: 10px;
  font-size: 20px;
  outline: none;
  ${borderRadiusAndNone}

  @media(max-width: 400px) {
    height: 50px;
    width: 85%;
  }
`;

export const StyleButton = styled.button`
  height: 50px;
  width: 20%;
  margin: 5px;
  background-color: black;
  color: white;
  font-size: 20px;
  cursor: pointer;
  /* background: ${({ ativo }) => (ativo ? "#000" : "#fff")};
  color: ${({ ativo }) => (ativo ? "#fff" : "#000")};
  cursor: pointer;
  &::hover {
    background: tomato;
  } */
  ${borderRadiusAndNone}

  @media(max-width: 400px) {
    height: 40px;
    width: 40%;
  }
`;

export const TitleLogo = styled.p`
  font-family: Burger Queen;
  font-size: ${props => props.size ? "80px" : "70px"};
  margin: 5px;

  @media (max-width: 400px) {
    font-size: ${props => props.size ? "60px" : "45px"};
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

export const CheckboxContainer = styled.div`
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: nowrap;
  width: 50%;
  ${displayFlexAndRow}
  ${fontSizeAndFamily}
`;

export const CheckboxRegister = styled.input`
  /* width: 1em; */
  ${fontSizeAndFamily};
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
  width: 20%
`;