import { ERoles } from 'src/utils/roles/ERoles';

export interface IAuthResponse {
  user: string;
  role: ERoles;
  error: null | Error;
  auth: boolean;
}
