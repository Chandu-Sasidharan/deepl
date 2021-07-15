import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  grid-template-rows: minmax(100vh, min-content);
  position: relative;
  justify-items: center;
  align-items: center;
  background-color: #eee;
`;

export const ContentWrpper = styled.div`
  display: grid;
  width: 90vw;
  margin-top: 15rem;
  row-gap: 1rem;
  justify-self: center;
  align-self: flex-start;
  align-items: center;
  justify-items: flex-start;
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
  margin-top: 5rem;
  color: #777;
  font-size: 2rem;

  @media screen and (max-width: 50rem) {
    font-size: 1.5rem;
  }
`;

export const Form = styled.div`
  width: 100%;
`;
export const Input = styled.textarea`
  width: 100%;
  height: 30rem;
  color: #555;
`;

export const SelectWrapper = styled.div`
  width: 100%;
  display: grid;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: #777;
  font-size: 2rem;

  @media screen and (max-width: 50rem) {
    font-size: 1.5rem;
  }
`;

export const Submitbutton = styled.div`
  background: transparent;
  width: fit-content;
  height: fit-content;
  padding: 1rem 2.8rem;
  font-size: 1.6rem;
  font-weight: bold;
  border: 2px solid #bbb;
  border-radius: 0.3rem;
  text-decoration: none;
  color: #777;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #bbb;
  }
`;
