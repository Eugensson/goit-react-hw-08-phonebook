import { useDispatch } from 'react-redux';

import {
  UserNameWrapper,
  UserNameInfo,
  NavigationLink,
  UserNameStyled,
} from './UserMenu.styled';

import { logOut } from 'redux/auth/operations';
import { useSelectors } from 'hooks/UseSelector';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { userName } = useSelectors();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <UserNameWrapper>
      <UserNameInfo>
        Welcome, <UserNameStyled>{userName}</UserNameStyled>{' '}
      </UserNameInfo>
      <NavigationLink onClick={handleLogout}>Logout</NavigationLink>
    </UserNameWrapper>
  );
};
