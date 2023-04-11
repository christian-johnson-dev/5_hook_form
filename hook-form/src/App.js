import "./App.css";
import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const generateListItem = (label, value) => {
    if (value.length > 0) {
      return (
        <li>
          {label}: {value}
        </li>
      );
    } else {
      return null;
    }
  };
  // let firstNameDisplay;
  // if (firstName.length > 0) {
  //   firstNameDisplay = <li> First Name: {firstName} </li>;
  // } else {
  //   firstNameDisplay = "";
  // }

  // let lastNameDisplay;
  // if (lastName.length > 0) {
  //   lastNameDisplay = <li> Last Name: {lastName} </li>;
  // } else {
  //   lastNameDisplay = "";
  // }

  // let emailDisplay;
  // if (email.length > 0) {
  //   emailDisplay = <li> Email: {email} </li>;
  // } else {
  //   emailDisplay = "";
  // }

  // let password1Display;
  // if (password1.length > 0) {
  //   password1Display = <li> Password: {password1} </li>;
  // } else {
  //   password1Display = "";
  // }

  // let password2Display;
  // if (password2.length > 0) {
  //   password2Display = <li> Confirm Password: {password2} </li>;
  // } else {
  //   password2Display = "";
  // }

  return (
    <div className="container">
      <div className="wrapper">
        <form action="">
          <div className="inputField">
            <label htmlFor="">First name</label>
            <input
              id="firstName"
              type="text"
              onChange={(event) => setFirstName(event.target.value)}
              value={firstName}
            />
          </div>
          <div className="inputField">
            <label htmlFor="">Last Name</label>
            <input
              id="lastName"
              type="text"
              onChange={(event) => setLastName(event.target.value)}
              value={lastName}
            />
          </div>
          <div className="inputField">
            <label htmlFor="">Email</label>
            <input
              id="email"
              type="email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
          </div>
          <div className="inputField">
            <label htmlFor="">Password</label>
            <input
              id="password1"
              type="password"
              onChange={(event) => setPassword1(event.target.value)}
              value={password1}
            />
          </div>
          <div className="inputField">
            <label htmlFor="">Confirm Password</label>
            <input
              id="password2"
              type="password"
              onChange={(event) => setPassword2(event.target.value)}
              value={password2}
            />
          </div>
        </form>
        <div className="output">
          <h2>Your form data</h2>
          <ul>
            {generateListItem("First Name", firstName)}
            {generateListItem("Last Name", lastName)}
            {generateListItem("Email", email)}
            {generateListItem("Password", password1)}
            {generateListItem("Confirm Password", password2)}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
