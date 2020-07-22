import styled from "styled-components";

const borderRadiusAndNone = `
  border: none;
  border-radius: 10px;
`;

const displayFlexAndColumn = `
  display: flex;
  flex-direction: column;
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
${borderRadiusAndNone}

@media(max-width: 400px) {
  height: 40px;
  width: 40%;
}
`;

export const TitleLogo = styled.p`
  font-family: Burger Queen;
  font-size: 80px;
  margin: 5px;

  @media(max-width: 400px) {
    font-size: 60px
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
  width: 100%
`;

export const StyleForm = styled.form`
  ${displayFlexAndColumn}
  align-items: center;
  width: 100%
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