export interface CreateSessionReq {
  displayName: string;
}

export interface CreateSessionRes {
  id: string;
  displayName: string;
}

export interface GetSessionReq {
  id: string;
}

export interface GetSessionRes {
  id: string;
  displayName: string;
}
