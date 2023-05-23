import styled from '@emotion/styled';

export const PhoneBookForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 500px;
  width: 100%;
  padding: 20px;
  border: 2px solid #000;
  border-radius: 5px;
`;

export const PhoneBookLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  color: #fff;
  box-sizing: border-box;
  gap: 10px;
  font-size: 20px;
  font-weight: 700;
  width: 100%;
`;
export const PhoneBookInput = styled.input`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  font-size: 20px;
  font-weight: 500;
  border: 1px solid #000;
`;

export const PhoneBookBtn = styled.button`
  font-family: inherit;
  padding: 10px;
  font-size: 16px;
  font-weight: 700;
  border: 1px solid #000;
  border-radius: 4px;
  cursor: pointer;
  color: #000;
  background: #fff;

  &:hover,
  &:focus,
  &:active {
    color: #fff;
    background: #000;
  }
`;
