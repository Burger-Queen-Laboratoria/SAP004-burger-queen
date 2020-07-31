import styled from "styled-components";

export const StyledNavKitchen = styled.nav`
  display: flex;
  justify-content: space-around;
  height: 90px;
  background-color: white;
  padding: 10px;
`;

export const StyledNavImg = styled.img`
  width: 50px;

  @media(max-width: 400px) {
    width: 45px;
  }
`;

export const StyleNavDiv = styled.div`
 text-align: center;
`;

export const StyleNavP = styled.p`
  font-family: ${props => props.queen ? "Burger Queen" : "helvetica"};
  font-size: ${props => props.queen ? "18px" : "16px"};
  margin: ${props => props.queen ? "5px 0px" : "10px 0px"};
  font-weight: bold;

  @media(max-width: 400px) {
    font-size: ${props => props.queen ? "14px" : "12px"};
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
  font-family: "helvetica";
  font-weight: bold;
  font-size: 18px;
`;

export const StyleTagDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;