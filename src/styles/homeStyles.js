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

export const Heading = styled.div`
  display: grid;
  justify-self: center;
  color: #777;
  font-size: 3rem;
  margin-top: 5rem;
  margin-bottom: 3rem;

  @media screen and (max-width: 50rem) {
    font-size: 2rem;
  }
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

export const Label = styled.div`
  color: #777;
  font-size: 1.75rem;
  font-style: italic;

  @media screen and (max-width: 50rem) {
    font-size: 1.5rem;
  }
`;

export const Input = styled.textarea`
  width: 100%;
  font-size: 1.5rem;
  padding: 1rem 1rem;
  height: 20rem;
  color: #555;
  border: none;
  outline: none;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.15rem 0.15rem rgba(0, 0, 0, 0.2);
`;

export const SelectWrapper = styled.div`
  width: 100%;
  display: grid;
  margin-top: 1rem;
  color: #777;
  font-size: 1.6rem;

  @media screen and (max-width: 50rem) {
    font-size: 1.5rem;
  }
`;

export const Submitbutton = styled.div`
  margin-top: 1rem;
  background: transparent;
  width: fit-content;
  height: fit-content;
  padding: 0.5rem 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  border: 2px solid #bbb;
  border-radius: 0.3rem;
  text-decoration: none;
  color: #777;
  cursor: pointer;
  transition: all 0.2s;
  justify-self: flex-end;

  &:hover {
    background: #bbb;
  }
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

export const Outheading = styled.div`
  color: #777;
  font-size: 1.75rem;
  font-style: italic;

  @media screen and (max-width: 50rem) {
    font-size: 1.5rem;
  }
`;

export const Output = styled.div`
  width: 100%;
  font-size: 1.5rem;
  padding: 1rem 1rem;
  height: 20rem;
  color: #555;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0 0 0.15rem 0.15rem rgba(0, 0, 0, 0.2);
`;
