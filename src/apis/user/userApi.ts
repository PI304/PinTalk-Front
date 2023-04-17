import instance from '@apis/_axios/instance';
import { UserId } from './userApi.type';

export class UserApi {
  async getUserDataById({ id }: UserId) {
    const { data } = await instance({
      method: 'GET',
      url: `users/${id}/`,
    });
    return data;
  }
}

const userApi = new UserApi();

export default userApi;
