import React from 'react';

import { Heading } from 'components/pages.styled';

import { Form, Contact, Filter } from 'components/index';

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
