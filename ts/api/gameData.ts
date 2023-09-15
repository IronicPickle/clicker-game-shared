export interface GetGameDataReq {
  id?: string;
  sessionId?: string;
}

export interface GetGameDataRes {
  id: string;
  sessionId: string;
  money: number;
}

export interface CreateGameDataReq {
  sessionId: string;
}

export interface CreateGameDataRes {
  id: string;
  sessionId: string;
  money: number;
}

export interface UpdateGameDataReq {
  id: string;
  activeMoneyEarned: number;
}

export interface UpdateGameDataRes {
  id: string;
  sessionId: string;
  money: number;
}
