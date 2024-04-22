export interface PostSignupBody {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface PostSignInBody {
  email: string;
  password: string;
}
