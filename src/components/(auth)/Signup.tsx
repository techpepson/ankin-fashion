import React from "react";
import SignupForm from "../../utils/SignupForm";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../global-states/store.reducer";
import {
  updateName,
  updateEmail,
  updatePassword,
  updateConfirmPassword,
  updatePhoneNumber,
} from "../../global-states/user.slice";
import { handleUserDetails } from "../../global-states/api/user.thunk.api";

const SignUp: React.FC = () => {
  //get the initialStates from the store
  const { name, email, password, confirmPassword, phoneNumber } = useSelector(
    (state: RootState) => state.user
  );
  //function to submit user details
  const sendUserDetails = () => {
    dispatch(
      handleUserDetails({
        userName: name,
        userEmail: email,
        userPassword: password,
        userPhone: phoneNumber,
      })
    );
  };

  //dispatch function to update the store
  const dispatch = useDispatch();
  return (
    <>
      <SignupForm
        handleSubmit={sendUserDetails}
        nameValue={name}
        emailValue={email}
        passwordValue={password}
        confirmPasswordValue={confirmPassword}
        phoneNumber={phoneNumber}
        onNameChange={(e) => dispatch(updateName(e.target.value))}
        onEmailChange={(e) => dispatch(updateEmail(e.target.value))}
        onPasswordChange={(e) => dispatch(updatePassword(e.target.value))}
        onConfirmPasswordChange={(e) =>
          dispatch(updateConfirmPassword(e.target.value))
        }
        onPhoneNumberChange={(e) =>
          dispatch(updatePhoneNumber(+e.target.value))
        }
      />
    </>
  );
};

export default SignUp;
