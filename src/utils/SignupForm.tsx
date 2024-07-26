import React, { useState } from "react";
import {
  Button,
  Card,
  Container,
  Heading,
  Text,
  TextField,
} from "@radix-ui/themes";
import { icons } from "../assets/icons";
import { Link } from "react-router-dom";
import { signUpStyles } from "../styles/signup.util.style";
import { logo } from "../assets/image-exports";

// Interface for login form props
interface SignupFormProps {
  nameValue?: string | number | undefined;
  emailValue?: string | number | undefined;
  passwordValue?: string | number | undefined;
  confirmPasswordValue?: string | number | undefined;
  phoneNumber?: number;
  onNameChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEmailChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onConfirmPasswordChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPhoneNumberChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit?: (event: React.MouseEventHandler<HTMLButtonElement>) => void;
}

const SignupForm: React.FC<SignupFormProps> = ({
  nameValue,
  emailValue,
  passwordValue,
  confirmPasswordValue,
  phoneNumber,
  onNameChange,
  onPasswordChange,
  onEmailChange,
  onConfirmPasswordChange,
  onPhoneNumberChange,
  handleSubmit,
}) => {
  //useState to handle the password visibility
  const [passwordVisible, setPasswordVisible] = useState(false);
  //function to toggle the password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <Container className="bg-[#64748b]">
      {/*signup welcome text*/}
      <Heading className="flex justify-center items-center text-[#f4f4f5] font-serif">
        JOIN OUR GROWING FAMILY
      </Heading>
      <div className={`${signUpStyles.signupContainer}`}>
        {/*company logo displayed on top of page*/}
        <img
          src={logo}
          alt="company logo displayed here"
          className={`h-80 w-full object-fill mb-5 rounded-md`}
        />
        {/* div container to wrap the name input field */}
        <Card className="bg-[#f0fdfa]">
          <form action="" className={`${signUpStyles.signupFormStyle}`}>
            <div>
              {/* Name label */}
              <Text as="label" htmlFor="user-name">
                Full Name
              </Text>
              {/* Name input field */}
              <TextField.Root
                placeholder="Enter your name here"
                name="userName"
                id="user-name"
                value={nameValue}
                type="text"
                onChange={onNameChange}
              >
                <TextField.Slot />
              </TextField.Root>
            </div>
            {/* div container to wrap the email input field */}
            <div>
              {/* Email label */}
              <Text as="label" htmlFor="user-email">
                Email
              </Text>
              {/* Email input field */}
              <TextField.Root
                placeholder="Enter your email here"
                name="userEmail"
                id="user-email"
                value={emailValue}
                type="email"
                onChange={onEmailChange}
              >
                <TextField.Slot />
              </TextField.Root>
            </div>
            {/* div container to wrap the password input field */}
            <div>
              {/* Password label */}
              <Text as="label" htmlFor="user-password">
                Password
              </Text>
              {/* Password input field */}
              <TextField.Root
                placeholder="Enter your password here"
                name="userPassword"
                id="user-password"
                value={passwordValue}
                type="password"
                onChange={onPasswordChange}
                {...(passwordVisible && { type: "text" })}
              >
                <TextField.Slot />
                {/* Password visibility toggle button */}
                {passwordValue && (
                  <span
                    onClick={togglePasswordVisibility}
                    className="cursor-pointer"
                  >
                    {passwordVisible ? icons.eyeOpen : icons.eyeLash}
                  </span>
                )}
              </TextField.Root>
            </div>
            {/* div container to wrap the password confirmation input field */}
            <div>
              {/* Confirm Password label */}
              <Text as="label" htmlFor="user-password-confirm">
                Confirm Password
              </Text>
              {/* Password confirmation input field */}
              <TextField.Root
                placeholder="Re-enter password..."
                name="userPasswordConfirm"
                id="user-password-confirm"
                value={confirmPasswordValue}
                type="password"
                onChange={onConfirmPasswordChange}
                {...(passwordVisible && { type: "text" })}
              >
                <TextField.Slot />
                {/* Password visibility toggle button */}
                {confirmPasswordValue && (
                  <span
                    onClick={togglePasswordVisibility}
                    className="cursor-pointer"
                  >
                    {passwordVisible ? icons.eyeOpen : icons.eyeLash}
                  </span>
                )}
              </TextField.Root>
            </div>
            {/* div container to wrap the phone number input field */}
            <div>
              {/* Phone number label */}
              <Text as="label" htmlFor="user-phone">
                Cell Phone Number
              </Text>
              {/* Phone number input field */}
              <TextField.Root
                placeholder="Enter your phone number here..."
                name="userPhone"
                id="user-phone"
                value={phoneNumber}
                type="number"
                onChange={onPhoneNumberChange}
              >
                <TextField.Slot />
              </TextField.Root>
            </div>
            {/*submit button*/}
            <div className="flex flex-col gap-3">
              <div className={`${signUpStyles.signupButton}`}>
                <Button
                  type="submit"
                  onClick={() => handleSubmit}
                  className="cursor-pointer hover:scale-105 transform transition duration-300 ease-in-out bg-[#2e582d3d] p-2 rounded-md"
                >
                  <Text color="plum">Signup</Text>
                </Button>
              </div>
              {/*login and sample text*/}
              <div className="flex gap-3">
                <Text color="cyan">Already have an account?</Text>
                <Link to="/login">
                  <Text color="cyan">Login</Text>
                </Link>
              </div>
            </div>
          </form>
        </Card>
      </div>
    </Container>
  );
};

export default SignupForm;
