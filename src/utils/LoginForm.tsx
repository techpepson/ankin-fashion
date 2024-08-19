//login utility component
//login utility component
import React from "react";

interface LoginFormProps {
  handleSubmit: () => void;
  emailValue: string;
  passwordValue: string;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  handleSubmit,
  emailValue,
  passwordValue,
  onEmailChange,
  onPasswordChange,
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      style={{ maxWidth: "400px", margin: "0 auto" }}
    >
      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>
          Email
        </label>
        <input
          type="email"
          id="email"
          value={emailValue}
          onChange={onEmailChange}
          required
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="password" style={{ display: "block", marginBottom: "5px" }}>
          Password
        </label>
        <input
          type="password"
          id="password"
          value={passwordValue}
          onChange={onPasswordChange}
          required
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid",
            color:"white"
          }}
        />
      </div>

      <button
        type="submit"
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
