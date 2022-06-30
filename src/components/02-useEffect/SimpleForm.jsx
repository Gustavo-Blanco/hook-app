import { useEffect, useState } from "react";
import "./effects.css";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const { name, email } = form;

  useEffect(() => {
    // console.log("Hey!");
  }, []);

  useEffect(() => {
    // console.log("Form state changed");
  }, [form]);

  useEffect(() => {
    // console.log("Email changed");
  }, [email]);

  const handleInputChange = ({ target }) => {
    // console.log(target.name, target.value);
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <h1>UseEffect</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Your name"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <br />
      <div className="form-group">
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Your email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>

      {name === "123" && <Message />}
    </>
  );
};
