import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-rows: min-content;
  position: relative;
  justify-items: center;
  align-items: flex-start;
  background-color: #eee;
`;

export const ContentWrapper = styled.div`
  display: grid;
  align-items: flex-start;
  width: 70vw;
  column-gap: 3rem;
  grid-template-columns: 1fr 1fr;
  padding-bottom: 4rem;

  @media screen and (max-width: 50em) {
    grid-template-columns: 1fr;
    row-gap: 3rem;
    width: 80vw;
  }
`;

export const InputWrpper = styled.div`
  display: grid;
  width: 100%;
  row-gap: 1rem;
  align-items: flex-start;
  justify-items: flex-start;
`;

export const InputLabel = styled.div`
  color: ${(props) => (props.isError ? "#FC5735" : "#777")};
  font-size: 1.75rem;
  font-style: italic;
  margin-left: 1rem;

  @media screen and (max-width: 50rem) {
    font-size: 1.5rem;
  }
`;

export const SelectButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  margin-top: 1rem;
  color: #777;
  font-size: 1.6rem;

  @media screen and (max-width: 50rem) {
    font-size: 1.5rem;
  }
`;

export const SelectButtonShadow = styled.div`
  box-shadow: 0 0 0.1rem 0.1rem rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
`;

export const OutputWrapper = styled.div`
  /* display: ${(props) => (props.isOutput ? "grid" : "none")}; */
  display: grid;
  row-gap: 1rem;
  width: 100%;
  justify-self: center;
  align-self: flex-start;
  align-items: center;
  justify-items: flex-start;
  font-size: 1.5rem;
`;

export const OutputLabel = styled.div`
  color: #777;
  font-size: 1.75rem;
  font-style: italic;
  margin-left: 1rem;

  @media screen and (max-width: 50rem) {
    font-size: 1.5rem;
  }
`;
