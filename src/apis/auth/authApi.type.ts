export type AuthEmail = {
  email: string;
};

export type AuthCode = {
  verificationCode: string;
};

export type AuthLogin = {
  email: string;
  password: string;
};

export type AuthChangePw = {
  currentPassword: string;
  newPassword: string;
};

export type AuthSignUp = {
  email: string;
  service_name: string;
  service_expl: string;
  service_domain: string;
  password: string;
};
