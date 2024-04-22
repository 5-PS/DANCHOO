export interface PostSignupBody {
  email: string;
  password: string;
  confirmPassword: string;
  type: 'employee' | 'employer';
}

export interface PostSignInBody {
  email: string;
  password: string;
}
