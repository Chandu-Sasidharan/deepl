import styled from "styled-components";

export const SubmitButton = styled.div`
  display: grid;
  background: transparent;
  width: fit-content;
  height: 100%;
  align-items: center;
  justify-items: center;
  padding: 0rem 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  border: 2px solid #bbb;
  border-radius: 0.3rem;
  color: #777;
  cursor: pointer;
  transition: all 0.2s;
  justify-self: flex-end;
  box-shadow: 0 0 0.1rem 0.1rem rgba(0, 0, 0, 0.05);

  &:hover {
    background: #bbb;
  }
`;
