import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-rows: min-content;
  position: relative;
  justify-items: center;
  align-items: center;
  background-color: #eee;
`;

export const InputWrpper = styled.div`
  display: grid;
  width: 70vw;
  margin-top: 4rem;
  row-gap: 1rem;
  justify-self: center;
  align-self: flex-start;
  align-items: center;
  justify-items: flex-start;

  @media screen and (max-width: 50rem) {
    width: 90vw;
  }
`;

export const Heading = styled.div`
  display: grid;
  justify-self: center;
  color: #777;
  font-size: 3rem;

  @media screen and (max-width: 50rem) {
    font-size: 2rem;
  }
`;

export const Label = styled.div`
  margin-top: 2.5rem;
  color: #777;
  font-size: 2rem;
  font-style: italic;

  @media screen and (max-width: 50rem) {
    font-size: 1.5rem;
  }
`;

export const Input = styled.textarea`
  width: 100%;
  padding: 1rem 1rem;
  height: 15rem;
  color: #555;
  border-color: #ccc;
  border-radius: 0.5rem;
  outline-color: #f9a796;
`;

export const SelectWrapper = styled.div`
  width: 100%;
  display: grid;
  margin-top: 1rem;
  color: #777;
  font-size: 2rem;

  @media screen and (max-width: 50rem) {
    font-size: 1.5rem;
  }
`;

export const Submitbutton = styled.div`
  margin-top: 1rem;
  background: transparent;
  width: fit-content;
  height: fit-content;
  padding: 0.75rem 2rem;
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
  display: ${(props) => (props.isOutput ? "grid" : "none")};
  width: 70vw;
  margin-top: 2rem;
  justify-self: center;
  align-self: flex-start;
  align-items: center;
  justify-items: flex-start;
  font-size: 1.5rem;

  @media screen and (max-width: 50rem) {
    width: 90vw;
  }
`;

export const Outheading = styled.div`
  margin: 0.5rem;
  color: #777;
  font-size: 2rem;
  font-style: italic;

  @media screen and (max-width: 50rem) {
    font-size: 1.5rem;
  }
`;

export const Output = styled.div`
  display: grid;
  width: 100%;
  padding: 1rem;
  justify-self: center;
  align-self: flex-start;
  font-size: 1.5rem;
  color: #555;
  padding: 1rem;
`;
