import React from "react";
import { ContactDiv, ContactForm } from "./Styles/ContactStyle";
import { TextField, Typography } from "@mui/material";
import { Btn2 } from "./Styles/BtnMUI";

const Contact = () => {
  const handleFormSubmit = (e) => {
    const formInputData = e.target.value;
    console.log(formInputData);
    console.log("rfe");
  };

  return (
    <ContactDiv>
      <Typography variant="h3" sx={{ marginBottom: "2rem" }}>
        Contact Us
      </Typography>
      <form action="">
        <ContactForm>
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            sx={{
              input: { color: "white" },
              label: { color: "white" },
              "& .MuiInput-underline:before": {
                borderBottomColor: "white",
              },
              "& .MuiInput-underline:hover:before": {
                borderBottomColor: "white",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "white",
              },
            }}
          />
          <TextField
            id="standard-basic"
            label="E-mail"
            type="email"
            variant="standard"
            sx={{
              input: { color: "white" },
              label: { color: "white" },
              "& .MuiInput-underline:before": {
                borderBottomColor: "white",
              },
              "& .MuiInput-underline:hover:before": {
                borderBottomColor: "white",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "white",
              },
              margin: "2rem",
            }}
          />
          <TextField
            id="standard-multiline-static"
            label="Message"
            multiline
            rows={4}
            defaultValue=""
            variant="standard"
            sx={{
              width: "250px",
              padding: "10px",
              input: { color: "white" },
              label: { color: "white" },
              "& .MuiInput-underline:before": {
                borderBottomColor: "white",
              },
              "& .MuiInput-underline:hover:before": {
                borderBottomColor: "white",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "white",
              },
              "& .MuiInputBase-root": {
                color: "white",
              },
            }}
          />
          <Btn2 onClick={handleFormSubmit}>Sumbit</Btn2>
        </ContactForm>
      </form>
    </ContactDiv>
  );
};

export default Contact;
