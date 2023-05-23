import styled from '@emotion/styled';

export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
  border: 1px solid #000;
  border-radius: 5px;
  width: 300px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 50px;
`;

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  margin: 0 auto;
  padding: 20px;
  gap: 20px;
`;

export const ContactsItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 18px;
  padding: 10px;
`;

export const DeleteBtn = styled.button`
  font-family: inherit;
  padding: 10px;
  font-size: 16px;
  font-weight: 700;
  border: 1px solid #000;
  border-radius: 4px;
  cursor: pointer;
  color: #fff;
  background: #000;

  &:hover,
  &:focus,
  &:active {
    color: #000;
    background: #fff;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const ContactInfo = styled.span`
  font-size: 20px;
`;
