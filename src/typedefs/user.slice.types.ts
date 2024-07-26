//type definition for user details during signup
export interface User {
  name: string;
  email: string;
  password: string | number;
  confirmPassword: string | number;
  phoneNumber: number;
}
