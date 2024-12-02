import React from "react";
import { ContactDiv, ContactForm } from "./Styles/ContactStyle";
import { Button, TextField, Typography } from "@mui/material";


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
              input: { color: "black" },
              label: { color: "black" },
              "& .MuiInput-underline:before": {
                borderBottomColor: "black",
              },
              "& .MuiInput-underline:hover:before": {
                borderBottomColor: "black",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "black",
              },
            }}
          />
          <TextField
            id="standard-basic"
            label="E-mail"
            type="email"
            variant="standard"
            sx={{
              input: { color: "black" },
              label: { color: "black" },
              "& .MuiInput-underline:before": {
                borderBottomColor: "black",
              },
              "& .MuiInput-underline:hover:before": {
                borderBottomColor: "black",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "black",
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
              input: { color: "black" },
              label: { color: "black" },
              "& .MuiInput-underline:before": {
                borderBottomColor: "black",
              },
              "& .MuiInput-underline:hover:before": {
                borderBottomColor: "black",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "black",
              },
              "& .MuiInputBase-root": {
                color: "black",
              },
            }}
          />
          <Button variant="contained" onClick={handleFormSubmit}>Submit</Button>
        </ContactForm>
      </form>
    </ContactDiv>
  );
};

export default Contact;
