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
              firstName: 'Иванов',
              secondName: 'Сергей',
              thirdName: 'Викторович',
              dateOfBirth: '17.04.1968',
              education: 'Высшее',
              academicDegree: 'Кондидат технических наук',
              academicRank: 'Инженер',
              contactNumber: '+7 (910) 148-82-28',
              contactEmail: 'simon12@gmail.com',
            },
            {
              id: 2,
              firstName: 'Симонов',
              secondName: 'Сергей',
              thirdName: 'Викторович',
              dateOfBirth: '17.04.1968',
              education: 'Высшее',
              academicDegree: 'Кондидат технических наук',
              academicRank: 'Инженер',
              contactNumber: '+7 (910) 148-82-28',
              contactEmail: 'simon12@gmail.com',
            },
            {
              id: 3,
              firstName: 'Исаев',
              secondName: 'Мирон',
              thirdName: 'Дмитриевич',
              dateOfBirth: '17.04.1968',
              education: 'Высшее',
              academicDegree: 'Кондидат технических наук',
              academicRank: 'Инженер',
              contactNumber: '+7 (910) 148-82-28',
              contactEmail: 'simon12@gmail.com',
            },
            {
              id: 4,
              firstName: 'Симонов',
              secondName: 'Сергей',
              thirdName: 'Викторович',
              dateOfBirth: '17.04.1968',
              education: 'Высшее',
              academicDegree: 'Кондидат технических наук',
              academicRank: 'Инженер',
              contactNumber: '+7 (910) 148-82-28',
              contactEmail: 'simon12@gmail.com',
            },
            {
              id: 5,
              firstName: 'Васильев',
              secondName: 'Сергей',
              thirdName: 'Викторович',
              dateOfBirth: '17.04.1968',
              education: 'Высшее',
              academicDegree: 'Кондидат технических наук',
              academicRank: 'Инженер',
              contactNumber: '+7 (910) 148-82-28',
              contactEmail: 'simon12@gmail.com',
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
          console.log('Success request, id: ', id);
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
