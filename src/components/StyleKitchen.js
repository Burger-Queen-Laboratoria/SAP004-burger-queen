import styled from "styled-components";

export const StyledNavKitchen = styled.nav`
  display: flex;
  justify-content: space-around;
  height: 90px;
  width: 100%;
  background-color: white;
  padding: 10px;
`;

export const StyledNavImg = styled.img`
  width: 50px;
`;

export const StyleNavDiv = styled.div`
 text-align: center;
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