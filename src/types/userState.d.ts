export type userState = {
  email: string;
  password: string;
  codeValid: boolean;
  data: {};
};

export type rootState = {
  user: userState;
};
