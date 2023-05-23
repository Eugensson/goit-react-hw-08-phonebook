import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto 20px auto;
  padding: 10px;
  width: 100%;
  max-width: 900px;
  border-bottom: 1px solid;
  box-shadow: 0px 1px 1px #999696;
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const NavigationList = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 0 20px;
`;

export const NavigationItem = styled.li`
  display: flex;
  gap: 10px;
`;

export const ContactsLink = styled(Link)`
  font-weight: 700;
  font-size: 20px;
  color: #000;

  &:hover,
  &:focus,
  &:active {
    color: #f00;
  }
`;

export const UserMenuWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const NavigationLink = styled(Link)`
  font-weight: 700;
  font-size: 20px;
  color: #000;

  &:hover,
  &:focus,
  &:active {
    color: #f00;
  }
`;
