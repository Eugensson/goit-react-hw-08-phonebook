import { useSelector } from 'react-redux';

export const useSelectors = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter.filter);
  const token = useSelector(state => state.auth.token);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const userName = useSelector(state => state.auth.user.name);
  const isFetchingCurrentUser = useSelector(
    state => state.auth.isFetchingCurrentUser
  );
  return {
    contacts,
    filter,
    token,
    isLoggedIn,
    userName,
    isFetchingCurrentUser,
  };
};
