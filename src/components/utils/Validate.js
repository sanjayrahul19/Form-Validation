export default function validate(input) {
  let errors = {};

  if (!input.name.trim()) {
    errors.name = "Name is Required";
  } else if (!/^[a-zA-Z_ ]*$/.test(input.name)) {
    errors.name = "Enter a valid name";
  }
  if (!input.age.trim()) {
    errors.age = "Age is required";
  } else if (input.age <= 18) {
    errors.age = "You are below 18";
  }
  if (!input.phoneNumber.trim()) {
    errors.phoneNumber = "Phone Number is Required";
  } else if (input.phoneNumber.length > 10 || input.phoneNumber.length < 10) {
    errors.phoneNumber = "Enter a valid Phone number";
  }
  if (!input.emailId.trim()) {
    errors.email = "Email is required";
  } else if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(input.emailId)) {
    errors.email = "Email Id is Invalid";
  }
  if (!input.password.trim()) {
    errors.password = "Password is required";
  } else if (input.password.length < 6) {
    errors.password = "Enter a strong password";
  }
  if (!input.confirmPassword.trim()) {
    errors.confirmPassword = "confirm password is required";
  } else if (input.password !== input.confirmPassword) {
    errors.confirmPassword = "Password do not match";
  }
  return errors;
}
