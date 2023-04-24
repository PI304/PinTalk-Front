import instance from '@apis/_axios/instance';
import { chatId, chatOffset } from './chatApti.type';

export class ChatApi {
  async getChatRoomList() {
    const { data } = await instance({
      method: 'GET',
      url: `chat/chatrooms/`,
    });
    return data;
  }
  async getChatRoomById({ id }: chatId) {
    const { data } = await instance({
      method: 'GET',
      url: `chat/chatrooms/${id}/`,
    });
    return data;
  }
  async DeleteChatRoomById({ id }: chatId) {
    const { data } = await instance({
      method: 'DELETE',
      url: `chat/chatrooms/${id}/`,
    });
    return data;
  }
  async GetChatRoomMessage({ id, limit, offset }: chatOffset) {
    const { data } = await instance({
      method: 'GET',
      url: `chat/chatrooms/${id}/chat-messages/`,
      params: {
        limit: limit,
        offset: offset,
      },
    });
    return data;
  }
  async getTxtChatRoomById({ id }: chatId) {
    const { data } = await instance({
      method: 'GET',
      url: `chat/chatrooms/${id}/download/`,
    });
    return data;
  }
}

const chatApi = new ChatApi();

export default chatApi;
