import styled from 'styled-components';

export const FieldContainer = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  label {
    font-size: 1rem;
    color: #383e71;
    margin: 0 8px 8px 8px;
    text-transform: uppercase;
  }

  input {
    border: 1px solid #989fdb;
    border-radius: 8px;
    height: 48px;
    padding: 16px;
    outline: none;

    &::placeholder {
      color: #989fdb;
    }
  }

  .error-message {
    color: #ff377f;
    font-size: 1rem;
    margin: 8px;
  }
`;
