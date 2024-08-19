import React from "react";
import LoginForm from "../../utils/LoginForm";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../global-states/store.reducer";
import { updateEmail, updatePassword } from "../../global-states/user.slice";
import { handleLogin } from "../../global-states/api/user.thunk.api";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  // Get the initial states from the store
  const { email, password } = useSelector((state: RootState) => state.user);

  // Dispatch function to update the store
  const dispatch = useDispatch();

  // Function to submit user login details
  const sendLoginDetails = () => {
    dispatch(
      handleLogin(
        {
          userEmail: email,
          userPassword: password,
        },
        navigate
      )
    );
  };

  return (
    <>
      <LoginForm
        handleSubmit={sendLoginDetails}
        emailValue={email}
        passwordValue={String(password)}
        onEmailChange={(e) => dispatch(updateEmail(e.target.value))}
        onPasswordChange={(e) => dispatch(updatePassword(e.target.value))}
      />
    </>
  );
};

export default LoginPage;
