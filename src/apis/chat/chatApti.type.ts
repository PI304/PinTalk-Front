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
};

export type chatMessage = {
  id: number;
  content: string;
};
