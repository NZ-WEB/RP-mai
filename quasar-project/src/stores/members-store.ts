import { defineStore } from 'pinia';
import { IMembersStore } from 'src/types/IMembersStore';
import { IMembersList } from 'src/types/IMembersList';

export const useMembersStore = defineStore('counter', {
  state: () =>
    ({
      membersList: [],
    } as IMembersStore),

  getters: {
    getMemberList(state) {
      return state.membersList;
    },
  },

  actions: {
    async loadMemberList() {
      new Promise<IMembersList[]>((res) => {
        setTimeout(() => {
          res([
            {
              id: 1,
              fullName: 'Иванов Иван Иваныч',
              avatar: 'https://m.buro247.ru/images/dasha/news/putin4.jpg',
              phoneNumber: '+7 (921) 92 929 99',
              birth: '19.29.1923',
              post: 'ст преподаватель',
            },
            {
              id: 2,
              fullName: 'Иванов Иван Иваныч',
              avatar: 'https://m.buro247.ru/images/dasha/news/putin4.jpg',
              phoneNumber: '+7 (921) 92 929 99',
              birth: '19.29.1923',
              post: 'ст преподаватель',
            },
            {
              id: 3,
              fullName: 'Иванов Иван Иваныч',
              avatar: 'https://m.buro247.ru/images/dasha/news/putin4.jpg',
              phoneNumber: '+7 (921) 92 929 99',
              birth: '19.29.1923',
              post: 'ст преподаватель',
            },
            {
              id: 4,
              fullName: 'Иванов Иван Иваныч',
              avatar: 'https://m.buro247.ru/images/dasha/news/putin4.jpg',
              phoneNumber: '+7 (921) 92 929 99',
              birth: '19.29.1923',
              post: 'ст преподаватель',
            },
            {
              id: 5,
              fullName: 'Иванов Иван Иваныч',
              avatar: 'https://m.buro247.ru/images/dasha/news/putin4.jpg',
              phoneNumber: '+7 (921) 92 929 99',
              birth: '19.29.1923',
              post: 'ст преподаватель',
            },
            {
              id: 6,
              fullName: 'Иванов Иван Иваныч',
              avatar: 'https://m.buro247.ru/images/dasha/news/putin4.jpg',
              phoneNumber: '+7 (921) 92 929 99',
              birth: '19.29.1923',
              post: 'ст преподаватель',
            },
          ]);
        }, 1000);
      }).then((r: IMembersList[]) => {
        this.membersList = r;
      });
    },
  },
});
