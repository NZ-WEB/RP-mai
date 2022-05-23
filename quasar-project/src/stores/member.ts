import { defineStore } from 'pinia';
import {IMember} from 'src/types/IMember';
import {IMemberState} from 'src/types/IMemberState';

export const useMemberStore = defineStore('counter', {
  state: () => ({
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
      reasonForStatusChange: null
    }
  }) as IMemberState,

  getters: {
    getMember(state): IMember {
      return state.member;
    }
  },

  actions: {
    async loadMemberData(id: number) {
      return await new Promise<IMember>(res => {
        setTimeout(() => {
          console.log(id, 'Member is loading')
          res(
            {
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
              reasonForStatusChange: 'Нанят'
            }
          )
        }, 1000);
      }).then((r: IMember) => {
        this.member = r;
        return r;
      });
    }
  }
});
