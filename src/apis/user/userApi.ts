import instance from '@apis/_axios/instance';
import { UserId, UserImage, UserProfile } from './userApi.type';

export class UserApi {
  async getUserDataById({ id }: UserId) {
    const { data } = await instance({
      method: 'GET',
      url: `users/${id}/`,
    });
    return data;
  }
  async patchUserDataById({ id }: UserId, userProfile: UserProfile) {
    const { data } = await instance({
      method: 'PATCH',
      url: `users/${id}/`,
      data: userProfile,
    });
    return data;
  }
  async patchUserImageById({ id }: UserId, userImage: UserImage) {
    const formData = new FormData();
    formData.append('profile_image', userImage.profileImage);

    const { data } = await instance({
      method: 'PATCH',
      url: `users/${id}/`,
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
  }
}

const userApi = new UserApi();

export default userApi;
