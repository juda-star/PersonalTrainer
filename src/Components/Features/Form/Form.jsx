import emailjs from "emailjs-com";
import React from "react";

export default function Form() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "user_F2sOkbXU6MFel9pj45ENo",
        "template_8awoubc",
        e.target,
        "user_F2sOkbXU6MFel9pj45ENo"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <div>
      <form className="contact-form" onSubmit={sendEmail}>
        <h1>Enter Details</h1>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
        <h5>copyright:nati taka</h5>
      </form>
    </div>
  );
}
