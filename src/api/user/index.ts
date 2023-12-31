// 权限问题后期增加
import { post } from '@/utils/http/axios';
// import axios from 'axios';
enum URL {
  login = '/user/login',
  logout = '/user/logout',
  profile = '/user/profile',
}
interface LoginRes {
  token: string;
}

export interface LoginData {
  username: string;
  password: string;
}

const login = async (data: LoginData) => post<any>({ url: URL.login, data });
const logout = async () => post<LoginRes>({ url: URL.logout });
export {  logout, login };
