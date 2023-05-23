import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LineWave } from 'react-loader-spinner';

import { UserMenu } from 'components/userMenu/UserMenu';
import { useSelectors } from 'hooks/UseSelector';

import {
  NavigationContainer,
  NavigationList,
  HeaderNav,
  NavigationItem,
  NavigationLink,
  ContactsLink,
  UserMenuWrapper,
} from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useSelectors();

  return (
    <>
      <NavigationContainer>
        <HeaderNav>
          <NavigationList>
            {isLoggedIn && (
              <>
                <NavigationItem>
                  <ContactsLink to="/">Home</ContactsLink>
                  <ContactsLink to="/contacts">Contacts</ContactsLink>
                </NavigationItem>
                <NavigationItem>
                  <UserMenu />
                </NavigationItem>
              </>
            )}
            {!isLoggedIn && (
              <>
                <NavigationItem>
                  <ContactsLink to="/">Home</ContactsLink>
                </NavigationItem>
                <NavigationItem>
                  <UserMenuWrapper>
                    <NavigationLink to="/register">SignUp</NavigationLink>
                    <NavigationLink to="/login">LogIn</NavigationLink>
                  </UserMenuWrapper>
                </NavigationItem>
              </>
            )}
          </NavigationList>
        </HeaderNav>
      </NavigationContainer>
      <main>
        <Suspense
          fallback={
            <LineWave
              height="200"
              width="200"
              color="#FBCA1F"
              ariaLabel="line-wave"
              wrapperStyle={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
