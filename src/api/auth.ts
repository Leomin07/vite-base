import { sendPost } from './axios';

const CLIENT_AUTH = 'client-auth';

// eslint-disable-next-line import/prefer-default-export
export const signIn = (payload: any) =>
  sendPost(`/${CLIENT_AUTH}/login`, payload);

export const signUp = (payload: any) =>
  sendPost(`/${CLIENT_AUTH}/register`, payload);

export const verifyTokenGoogle = (payload: any) =>
  sendPost(`/${CLIENT_AUTH}/verify-token-google`, payload);
