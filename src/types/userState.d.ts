export type userState = {
  id: number;
  email: string;
  password: string;
  codeValid: boolean;
  data: {
    accessKey: string;
    accessToken: string;
    createdAt: string;
    description: string;
    email: string;
    id: number;
    isDeleted: boolean;
    profileImage: string | null;
    profileName: string;
    secretKey: string;
    serviceDomain: string;
    serviceExpl: string;
    serviceName: string;
    updatedAt: string;
    uuid: string;
  };
};

export type rootState = {
  user: userState;
};

export type userData = {
  accessKey: string;
  accessToken: string;
  createdAt: string;
  description: string;
  email: string;
  id: number;
  isDeleted: boolean;
  profileImage: string | null;
  profileName: string;
  secretKey: string;
  serviceDomain: string;
  serviceExpl: string;
  serviceName: string;
  updatedAt: string;
  uuid: string;
};
