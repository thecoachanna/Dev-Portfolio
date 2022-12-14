import React, { useState, Link } from "react";

import styled from "styled-components";


const Body = styled.div`
  background: #ba7ba1;
  color: #2b2b46;
`;

const ContactPage = () => {

  const [contact, setContact] = useState(["nettles.anna@gmail.com", "linkedin.com/in/thecoachanna", "github.com/thecoachanna"])

  return (
    <Body>
    <>
      <h1>Contact Me</h1>

      {contact.map((cm) => {
        return <p>{ cm }</p>
      })
      }
      
      </>
      </Body>
  );
};

export default ContactPage;