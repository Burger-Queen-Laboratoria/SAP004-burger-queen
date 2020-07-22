import styled from "styled-components";

export const StyleInput = styled.input`
height: 60px;
width: 60%;
border-radius: 15px;
font-size: 20px;

@media(max-width: 400px) {
  width: 85%;
}
`;

export const StyleButton = styled.button`
height: 50px;
width: 20%;
border-radius: 15px;
background-color: black;
color: white;
font-size: 20px;

@media(max-width: 400px) {
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
  width: 30%;
`;

export const StyleSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%
`;

export const StyleForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%
`;

export const NewMember = styled.p`
  margin: 10px;
  font-size: 30px;
  font-family: "helvetica";

  @media(max-width: 400px) {
    font-size: 20px
  }
`;

export const RegisterMember = styled.p`
  margin: 10px;
  font-size: 30px;
  font-family: "helvetica";
  font-weight: bold;

  @media(max-width: 400px) {
    font-size: 20px
  }
`;