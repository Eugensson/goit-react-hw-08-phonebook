import styled from '@emotion/styled';
import { Field, ErrorMessage } from 'formik';

export const Heading = styled.h2`
  margin-top: 20px;
  font-size: 28px;
  font-weight: 700;
  text-align: center;
`;

export const HomeContainer = styled.section`
  background: #dadada;
  max-width: 800px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 20px;
  font-weight: 700;
  font-size: 18px;
  border: 1px solid;
  border-radius: 4px;
  box-shadow: 4px 2px 2px #999696;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const HomeTitle = styled.h1`
  font-size: 24px;
  text-align: center;
`;

export const HomeSubtitle = styled.h2`
  font-size: 20px;
`;

export const HomeText = styled.p`
  font-size: 18px;
`;

export const WrapperStyled = styled.div`
  background: #fff;
  width: 500px;
  margin: 100px auto;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #000;
  border-radius: 4px;
  box-shadow: 2px 2px 4px #999696;
`;

export const FormTitle = styled.h1`
  text-transform: uppercase;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
`;

export const FormContent = styled.div`
  padding: 35px;
  text-align: center;
`;

export const FormLabel = styled.label`
  padding: 12px 5px;
`;

export const FormInput = styled(Field)`
  font-size: 16px;
  display: block;
  font-family: 'Rubik', sans-serif;
  width: 100%;
  color: ${({ isvalid }) => (isvalid !== 'false' ? '#000' : '#f00')};
  padding: 10px 1px;
  border: 0;
  border-bottom: 1px solid
    ${({ isvalid }) => (isvalid !== 'false' ? '#000' : '#f00')};
  outline: none;
  transition: all 0.5s;
  &::placeholder {
    text-transform: uppercase;
  }
`;

export const FormError = styled(ErrorMessage)`
  color: #f00;
  font-size: 14px;
  margin-top: 5px;
  text-align: left;
  padding-left: 5px;
`;

export const LogInSignUpBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  border: none;
  margin: 0 auto;
  padding: 10px;
  font-size: 18px;
  font-family: 'Rubik', sans-serif;
  cursor: pointer;
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
  border-radius: 4px;
  letter-spacing: 0.2px;
  outline: 0;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;

  &:hover,
  &:focus,
  &:active {
    color: #fff;
    background-color: #000;
  }
`;
