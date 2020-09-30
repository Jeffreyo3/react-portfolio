import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import styled from "styled-components";
import { Container, H2 } from "../theme/styles";

////////////// STYLED COMPONENTS ///////////////
const Form = styled.form`
  margin: 0 auto;
  width: 95%;
  max-width: 82.5rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 20rem;
`;

const Label = styled.label`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const Input = styled.input`
  height: 5.5rem;
  padding-left: 1.2rem;
  line-height: 5.5rem;
  border-radius: 7px;
  border: 1px solid ${(pr) => pr.theme.colors.c_divider};
  font-size: ${(pr) => pr.theme.fontsizes.fs_p};
  font-family: ${(pr) => pr.theme.fonts.f_primary};

  /* INPUT PLACEHOLDER TEXT STYLING */
  ::-webkit-input-placeholder {
    font-size: ${(pr) => pr.theme.fontsizes.fs_p};
    font-family: ${(pr) => pr.theme.fonts.f_secondary};
    color: ${(pr) => pr.theme.colors.c_placeholder};
    transform: translateY(-4px);
  }
  ::placeholder {
    font-size: ${(pr) => pr.theme.fontsizes.fs_p};
    font-family: ${(pr) => pr.theme.fonts.f_secondary};
    color: ${(pr) => pr.theme.colors.c_placeholder};
    transform: translateY(4px);
  }
  :-ms-input-placeholder {
    font-size: ${(pr) => pr.theme.fontsizes.fs_p};
    font-family: ${(pr) => pr.theme.fonts.f_secondary};
    color: ${(pr) => pr.theme.colors.c_placeholder};
  }
`;

const MessageInput = styled.textarea`
  height: 35.5rem;
  padding: 1.2rem;
  border-radius: 7px;
  border: 1px solid ${(pr) => pr.theme.colors.c_divider};
  font-size: ${(pr) => pr.theme.fontsizes.fs_p};
  font-family: ${(pr) => pr.theme.fonts.f_primary};

  /* INPUT PLACEHOLDER TEXT STYLING */
  ::-webkit-input-placeholder {
    font-size: ${(pr) => pr.theme.fontsizes.fs_p};
    font-family: ${(pr) => pr.theme.fonts.f_secondary};
    color: ${(pr) => pr.theme.colors.c_placeholder};
    /* transform: translate(-4px); */
    padding-top: 0;
  }
  ::placeholder {
    font-size: ${(pr) => pr.theme.fontsizes.fs_p};
    font-family: ${(pr) => pr.theme.fonts.f_secondary};
    color: ${(pr) => pr.theme.colors.c_placeholder};
    transform: translateY(4px);
    padding-top: 0;
  }
  :-ms-input-placeholder {
    font-size: ${(pr) => pr.theme.fontsizes.fs_p};
    font-family: ${(pr) => pr.theme.fonts.f_secondary};
    color: ${(pr) => pr.theme.colors.c_placeholder};
    padding-top: 0;
  }

  transform: 0;
`;

const Error = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 4.2rem;
  font-size: ${(pr) => pr.theme.fontsizes.fs_p};
  color: ${(pr) => pr.theme.colors.c_tertiary};
`;

const ErrSpace = styled.div`
  width: 100%;
  height: 4.2rem;
`;
//////////// END STYLED COMPONENTS /////////////

/////////////// REACT COMPONENT ////////////////
export default function Contact() {
  const { register, errors, handleSubmit } = useForm({
    criteriaMode: "all",
  });
  const onSubmit = (data) => console.log(data);

  return (
    <Container>
      <H2>Let's get in touch!</H2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* NAME */}
        <Label htmlFor="name">Name</Label>
        <Input
          name="name"
          placeholder="Name"
          ref={register({
            required: "A name is required to submit",
            pattern: {
              value: /^[a-zA-Z\s]*$/i,
              message: "Name must not contain numbers or symbols",
            },
            minLength: {
              value: 4,
              message: "Name needs to be at least 4 characters long",
            },
          })}
        />

        {!errors.name ? (
          <ErrSpace />
        ) : (
          <ErrorMessage
            errors={errors}
            name="name"
            render={({ messages }) => {
              console.log("messages", messages);
              return messages
                ? Object.entries(messages).map(([type, message], idx) => {
                    if (idx > 0) {
                      return null;
                    }
                    return <Error key={type}>{message}</Error>;
                  })
                : null;
            }}
          />
        )}

        {/* EMAIL */}
        <Label htmlFor="email">E-mail</Label>
        <Input
          name="email"
          type="email"
          placeholder="E-mail Address"
          ref={register({
            required: {
              value: true,
              message: "Please supply a contact email address",
            },
          })}
        />
        {!errors.email ? (
          <ErrSpace />
        ) : (
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ messages }) => {
              console.log("messages", messages);
              return messages
                ? Object.entries(messages).map(([type, message], idx) => {
                    if (idx > 0) {
                      return null;
                    }
                    return <Error key={type}>{message}</Error>;
                  })
                : null;
            }}
          />
        )}

        {/* PHONE */}
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          name="phone"
          placeholder="Phone Number"
          type="tel"
          ref={register}
        />
        {!errors.phone ? (
          <ErrSpace />
        ) : (
          <ErrorMessage
            errors={errors}
            name="phone"
            render={({ messages }) => {
              console.log("messages", messages);
              return messages
                ? Object.entries(messages).map(([type, message], idx) => {
                    if (idx > 0) {
                      return null;
                    }
                    return <Error key={type}>{message}</Error>;
                  })
                : null;
            }}
          />
        )}

        {/* MESSAGE */}
        <Label htmlFor="message">Message</Label>
        <MessageInput
          name="message"
          type="text"
          placeholder="Message"
          ref={register({ required: false, maxLength: 500 })}
        />
        {!errors.message ? (
          <ErrSpace />
        ) : (
          <ErrorMessage
            errors={errors}
            name="message"
            render={({ messages }) => {
              console.log("messages", messages);
              return messages
                ? Object.entries(messages).map(([type, message], idx) => {
                    if (idx > 0) {
                      return null;
                    }
                    return <Error key={type}>{message}</Error>;
                  })
                : null;
            }}
          />
        )}

        {/* SUBMIT */}
        <button type="submit">Submit</button>
      </Form>
    </Container>
  );
}
///////////// END REACT COMPONENT //////////////
