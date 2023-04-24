import instance from '@apis/_axios/instance';
import { AuthChangePw, AuthCode, AuthEmail, AuthLogin, AuthSignUp } from './authApi.type';
import instance2 from '@apis/_axios/instance2';

export class AuthApi {
  async postCheckEmail(body: AuthEmail): Promise<AuthEmail | boolean> {
    try {
      const { data } = await instance2({
        method: 'POST',
        url: 'auth/check-email/',
        data: body,
      });
      return data;
    } catch (e) {
      return false;
    }
  }

  async postSendCode(body: AuthEmail): Promise<AuthEmail> {
    const { data } = await instance2({
      method: 'POST',
      url: 'auth/email-verification/',
      data: body,
    });
    return data;
  }
  async postCodeConfirm(body: AuthCode) {
    const { data } = await instance2({
      method: 'POST',
      url: 'auth/email-confirmation/',
      data: body,
    });
    return data;
  }
  async postLogin(body: AuthLogin) {
    const { data } = await instance2({
      method: 'POST',
      url: 'auth/login/',
      data: body,
    });
    return data;
  }
  async postChangePassword(body: AuthChangePw) {
    const { data } = await instance({
      method: 'POST',
      url: 'auth/password-change/',
      data: body,
    });
    return data;
  }
  async postResetPassword(body: AuthEmail) {
    const { data } = await instance({
      method: 'POST',
      url: 'auth/password-reset/',
      data: body,
    });
    return data;
  }
  async postSignUp(body: AuthSignUp) {
    const { data } = await instance2({
      method: 'POST',
      url: 'auth/signup/',
      data: body,
    });
    return data;
  }
  async postLeave() {
    await instance({
      method: 'POST',
      url: 'auth/leave/',
    });
  }
}

const authApi = new AuthApi();

export default authApi;
