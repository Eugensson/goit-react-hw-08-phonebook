import styled from '@emotion/styled';

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
`;

export const FilterTitle = styled.label`
  text-aligh: left;
  margin-bottom: 10px;
  font-size: 20px;
  font-weigth: 700;
`;

export const FilterInput = styled.input`
  width: 600px;
  padding: 5px;
  margin-bottom: 20px;
  border: 1px solid #000;
  border-radius: 5px;
  font-size: 16px;
  font-weigth: 500;
  margin-top: 5px;
`;
