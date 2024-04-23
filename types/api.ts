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

export interface GetNoticesParams {
  offset?: number;
  limit?: number;
  address?: string;
  keyword?: string;
  startsAtGte?: string;
  hourlyPayGte?: number;
  sort?: 'time' | 'pay' | 'hour' | 'shop';
}
