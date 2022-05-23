import { ERoles } from 'src/utils/roles/ERoles';

export interface IAuthState {
  user: string | null;
  auth: boolean;
  role: ERoles;
  error: Error | null;
}
