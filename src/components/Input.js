import React, { useState } from "react";
import "./Input.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import validate from "./utils/Validate";
const Input = () => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    phoneNumber: "",
    emailId: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState([]);
  const [isPass, setIsPass] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(input));
    setInput({
      name: "",
      age: "",
      phoneNumber: "",
      emailId: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="form">
      <h1>SignUp Form</h1>
      <form className="container" onSubmit={handleSubmit}>
        {/* htmlFor attribute is used to focus the input field */}
        <div className="card">
          <label htmlFor="name">Name:</label>
          <input
            className="input"
            id="name"
            name="name"
            type="text"
            value={input.name}
            placeholder="Enter your Name"
            onChange={handleChange}
          />
        </div>
        {errors.name && <p>{errors.name}</p>}
        <div className="card">
          <label htmlFor="age">Age:</label>
          <input
            className="input"
            id="age"
            name="age"
            type="number"
            value={input.age}
            placeholder="Enter your age"
            onChange={handleChange}
          />
        </div>
        {errors.age && <p>{errors.age}</p>}
        <div className="card">
          <label htmlFor="number">Phone Number:</label>
          <input
            className="input"
            id="number"
            name="phoneNumber"
            type="number"
            value={input.phoneNumber}
            placeholder="Enter your Phone Number"
            onChange={handleChange}
          />
        </div>
        {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
        <div className="card">
          <label htmlFor="email">Email Id:</label>
          <input
            className="input"
            id="email"
            name="emailId"
            type="text"
            value={input.emailId}
            placeholder="Enter your Email Id"
            onChange={handleChange}
          />
        </div>
        {errors.email && <p>{errors.email}</p>}
        <div className="card">
          <label htmlFor="password">Password:</label>
          <div className="pass">
            <input
              id="password"
              name="password"
              type={isPass ? "password" : "text"}
              value={input.password}
              placeholder="Enter your password"
              onChange={handleChange}
            />
            {isPass ? (
              <VisibilityIcon
                className="icon"
                onClick={() => setIsPass((preState) => !preState)}
              />
            ) : (
              <VisibilityOffIcon
                className="icon"
                onClick={() => setIsPass((preState) => !preState)}
              />
            )}
          </div>
        </div>
        {errors.password && <p>{errors.password}</p>}
        <div className="card">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            className="input"
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={input.confirmPassword}
            placeholder="Confirm your password"
            onChange={handleChange}
          />
        </div>
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        <div className="button">
          <button type="submit">SignUp</button>
        </div>
        <div className="desc">
          <span>
            Already have an account?Login <a href="login">Here</a>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Input;
