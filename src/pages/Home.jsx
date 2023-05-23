import React from 'react';

import {
  HomeContainer,
  HomeTitle,
  HomeSubtitle,
  HomeText,
} from 'components/pages.styled';

const Home = () => {
  return (
    <HomeContainer>
      <HomeTitle>Welcome to Phonebook!</HomeTitle>
      <HomeText>
        We welcome you to our convenient Phonebook application. Here, you can
        easily store and manage your contacts. With our intuitive and appealing
        user platform, you will be able to organize your phonebook effortlessly
        and efficiently. With Phonebook, you can add new contacts and quickly
        search for the information you need without any hassle. We prioritize
        your security and confidentiality, which is why Phonebook offers secure
        storage for your data. Your contacts will be protected and only
        accessible to you. Don't lose your contacts or struggle with their
        management. Phonebook is here to help you stay organized and connected
        with everyone who matters to you.
      </HomeText>
      <HomeText>Enjoy using Phonebook!</HomeText>
      <HomeSubtitle>Best regards, The Phonebook Team</HomeSubtitle>
    </HomeContainer>
  );
};

export default Home;
