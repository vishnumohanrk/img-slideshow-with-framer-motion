export interface IAPIResp {
  picID: string;
  picSrc: string;
  picDescription: string | null;
  userName: string;
  userLink: string;
}

export interface IError {
  error: string;
}
