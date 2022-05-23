import { defineStore } from 'pinia';
import { IAuthState } from 'src/types/IAuthState';
import { ERoles } from 'src/utils/roles/ERoles';
import { IAuthResponse } from 'src/types/IAuthResponse';

export const useAuthStore = defineStore('useAuthStore', {
  state: () =>
    ({
      auth: false,
      user: null,
      role: ERoles.anon,
      error: null,
    } as IAuthState),

  getters: {
    getAuth(state): boolean {
      return state.auth;
    },

    getRole(state): ERoles {
      return state.role;
    },
  },

  actions: {
    async login(login: string, password: string) {
      return await new Promise<IAuthResponse>((res) => {
        console.log('start');
        if (login === 'admin' && password === 'admin') {
          res({
            user: 'admin',
            role: ERoles.admin,
            auth: true,
            error: null,
          });
        } else if (login === 'registered' && password === 'registered') {
          res({
            user: 'registered',
            role: ERoles.registered,
            auth: true,
            error: null,
          });
        } else {
          res({
            user: 'anon',
            role: ERoles.anon,
            error: new Error('Неправильный логин или пароль'),
            auth: false,
          });
        }
      })
        .then((r) => {
          this.auth = r.auth;
          this.role = r.role;
          this.user = r.user;
          this.error = r.error;
          return r;
        })
        .then(() => console.log(this.auth, this.role, this.user));
    },

    logOut() {
      this.auth = false;
      this.user = null;
      this.role = ERoles.anon;
      this.error = null;
    },
  },
});
