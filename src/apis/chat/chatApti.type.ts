export type chatId = {
  id: number;
};

export type chatOffset = {
  id: number;
  limit: number;
  offset: number;
};

export type chatRoom = {
  id: number;
  name: string;
  guest: string;
  latestMsg: string;
  latestMsgAt: string;
  lastCheckedAt: string;
  isClosed: boolean;
  closedAt: string;
  createdAt: string;
};

export type chatMessage = {
  chatroom: number;
  message: string;
  is_host: boolean;
  datetime: string;
  id: number;
};
