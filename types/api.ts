export interface PostSignupBody {
  email: string;
  password: string;
  password_repeat: string;
}

export interface PostSignInBody {
  email: string;
  password: string;
}
