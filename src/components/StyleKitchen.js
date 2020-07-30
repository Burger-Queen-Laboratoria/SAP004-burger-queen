import styled from "styled-components";

export const FixedNavKitchen = styled.nav`
  display: flex;
  width: calc(100% - 10px);
  height: 90px;
  background-color: white;
  padding: 10px;
  justify-content: space-around;
  font-family: Helvética;
`;

export const ImgNavKitchen = styled.img`
  width: 35%;

  @media(max-width: 400px) {
    width: 80%;
  }
`;

export const ImgIcon = styled.img`
  height: 60%;
  cursor: pointer;
`;

export const SpanNavKitchen = styled.span`
  display: flex;
  width: 80%;
  justify-content: flex-end;

  @media(max-width: 400px) {
    height: 70%;
  }
`;

export const DivNavKitchen = styled.div`
  text-align: center;
  margin-right: 10px;
  width: 50%;
`;

export const SpanNavKitchenFirst = styled.span`
  display: flex;
  flex-direction: column;
  width: 20%;
  align-items: center;
`;

export const TagP = styled.p`
  font-family: "helvetica";

  @media(max-width: 400px) {
    font-size: 13px;
  }
`;

export const TagH6 = styled.h6`
  margin: 0px;
  font-family: "Burger Queen";
  font-size: 25px;

  @media(max-width: 400px) {
    font-size: 15px;
  }
`;

export const TagDiv = styled.div`
  width: 100%;
`;

export const TagSpam = styled.span`
  display: flex;
  width: 40%;
`;

export const TagTitleKitchen = styled.h6`
 font-family: "Burger Queen";
 text-align: center;
 font-size: 50px;
 margin: 10px;
`;

export const StyleTagUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width:80%;

  & li {
    border: 1px solid #C4C4C4;
    background-color: #A04835;
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
  background-color: #C4C4C4;
`;

export const StyleTagDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;