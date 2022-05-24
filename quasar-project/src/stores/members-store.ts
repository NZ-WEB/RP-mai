import { defineStore } from 'pinia';
import { IMembersStore } from 'src/types/IMembersStore';
import { IUsers } from 'src/types/IUsers';
import { IMember } from 'src/types/IMember';

export const useUsersStore = defineStore('counter', {
  state: () =>
    ({
      membersList: [],
      member: {
        post: null,
        bid: null,
        salary: null,
        PKG: null,
        KL: null,
        postType: null,
        nameOfOrganization: null,
        subdivision: null,
        supervisor: null,
        signOfALeader: null,
        contractEndDate: null,
        status: null,
        reasonForStatusChange: null,
      },
    } as IMembersStore),

  getters: {
    getMemberList(state): IUsers[] {
      return state.membersList;
    },
  },

  actions: {
    async loadMemberList() {
      await new Promise<IUsers[]>((res) => {
        setTimeout(() => {
          res([
            {
              id: 1,
              fullName: 'Иванов Иван Иваныч',
              avatar: 'https://m.buro247.ru/images/dasha/news/putin4.jpg',
              phoneNumber: '+7 (921) 92 929 99',
              birth: '19.29.1923',
              post: 'ст преподаватель',
              login: 'Iuser',
            },
            {
              id: 2,
              fullName: 'Иванов Иван Иваныч',
              avatar: 'https://m.buro247.ru/images/dasha/news/putin4.jpg',
              phoneNumber: '+7 (921) 92 929 99',
              birth: '19.29.1923',
              post: 'ст преподаватель',
              login: 'Iuser',
            },
            {
              id: 3,
              fullName: 'Иванов Иван Иваныч',
              avatar: 'https://m.buro247.ru/images/dasha/news/putin4.jpg',
              phoneNumber: '+7 (921) 92 929 99',
              birth: '19.29.1923',
              post: 'ст преподаватель',
              login: 'Iuser',
            },
            {
              id: 4,
              fullName: 'Иванов Иван Иваныч',
              avatar: 'https://m.buro247.ru/images/dasha/news/putin4.jpg',
              phoneNumber: '+7 (921) 92 929 99',
              birth: '19.29.1923',
              post: 'ст преподаватель',
              login: 'Iuser',
            },
            {
              id: 5,
              fullName: 'Иванов Иван Иваныч',
              avatar: 'https://m.buro247.ru/images/dasha/news/putin4.jpg',
              phoneNumber: '+7 (921) 92 929 99',
              birth: '19.29.1923',
              post: 'ст преподаватель',
              login: 'Iuser',
            },
            {
              id: 6,
              fullName: 'Иванов Иван Иваныч',
              avatar: 'https://m.buro247.ru/images/dasha/news/putin4.jpg',
              phoneNumber: '+7 (921) 92 929 99',
              birth: '19.29.1923',
              post: 'ст преподаватель',
              login: 'Iuser',
            },
          ]);
        }, 1000);
      }).then((r: IUsers[]) => {
        this.membersList = r;
      });
    },
    async loadMemberData(id: number) {
      return await new Promise<IMember>((res) => {
        setTimeout(() => {
          console.log(id, 'Member is loading');
          res({
            post: 'Ст. Преподаватель',
            bid: '500р / час',
            salary: '50 000p',
            PKG: 'Группа А',
            KL: 'Уровень Г',
            postType: 'Основное совместительство',
            nameOfOrganization: 'ГУП МОЦ ЛФО ЛФ ДФЦЖДЬФ дфлталт ФДЛ фцатщ оц',
            subdivision: 'Отдел управления и реалтзыанни фци',
            supervisor: 'Жмышенко В. А.',
            signOfALeader: 'Да',
            contractEndDate: '22.13.2022',
            status: 'Действующий',
            reasonForStatusChange: 'Нанят',
          });
        }, 1000);
      }).then((r: IMember) => {
        this.member = r;
        return r;
      });
    },
  },
});
