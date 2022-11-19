import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border: 0;
    padding: 1rem;
    border-radius: 6px;
    color: ${(props) => props.theme.color["gray-300"]};
    background: ${(props) => props.theme.color["gray-900"]};

    &::placeholder {
      color: ${(props) => props.theme.color["gray-500"]};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    padding: 1rem;
    background: transparent;
    color: ${(props) => props.theme.color["green-300"]};
    border: 1px solid ${(props) => props.theme.color["green-300"]};

    font-weight: bold;
    border-radius: 6px;

    &:disabled {
      opacity: 0.7;
    }

    &:not(:disabled):hover {
      color: ${(props) => props.theme.color.white};
      background: ${(props) => props.theme.color["green-500"]};
      border: 1px solid ${(props) => props.theme.color["green-500"]};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`;
