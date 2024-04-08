import React, { useState } from "react";
import { SendEmail } from "../../apiHandler/otp/otp.api";

const SendEmailPage = () => {
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value)
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        let res = await SendEmail(email)
    } catch (error) {
        console.log(error)
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="bg-red-500"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-secondary">submit</button>
      </form>
    </div>
  );
};

export default SendEmailPage;
