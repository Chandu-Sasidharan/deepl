import styled from "styled-components";

export const SubmitButton = styled.div`
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
  box-shadow: 0 0 0.1rem 0.1rem rgba(0, 0, 0, 0.05);

  &:hover {
    background: #bbb;
  }
`;
