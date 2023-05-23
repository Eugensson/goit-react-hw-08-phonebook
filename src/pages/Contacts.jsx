import React from 'react';

import { Form, Contact, Filter } from 'components/index';

import { Heading } from 'components/pages.styled';

const Contacts = () => {
  return (
    <>
      <Form />
      <Heading>Contacts</Heading>
      <Filter />
      <Contact />
    </>
  );
};

export default Contacts;
