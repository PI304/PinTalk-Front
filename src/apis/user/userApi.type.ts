export type UserId = {
  id: number;
};

export type UserProfile = {
  profileName: string;
  description: string;
  serviceName: string;
  serviceDomain: string;
  serviceExpl: string;
};

export type UserImage = {
  profileImage: File;
};
