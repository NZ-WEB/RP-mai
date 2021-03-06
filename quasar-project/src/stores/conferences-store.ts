import { defineStore } from 'pinia';
import { IConferenceStoreState } from 'src/types/IConferenceStoreState';
import { IConference } from 'src/types/IConference';

export const useConferencesStore = defineStore('conferences', {
  state: () =>
    ({
      conferences: [],
      error: null,
    } as IConferenceStoreState),

  getters: {
    getConferences(state: IConferenceStoreState): IConference[] {
      return state.conferences;
    },
  },

  actions: {
    async loadAll(): Promise<IConference[]> {
      return await new Promise<IConference[]>((res) => {
        setTimeout(() => {
          res([
            {
              id: 1,
              name: 'XLVI Международная научно-практическая конференция «Российская наука в современном мире»',
              theme: 'Микросервисы, и почему они вам не нужны',
            },
            {
              id: 2,
              name: 'Международная научно-практическая конференция «Наука, инновации, образование: актуальные вопросы XXI века»',
              theme: 'TDD подход в разработке приложений',
            },
            {
              id: 3,
              name: 'II Международная научно-исследовательская конференция по устойчивым материалам и технологиям (SMIT 2022)\n',
              theme: 'Польза и вред UNIT тестирования',
            },
            {
              id: 4,
              name: 'I Международная научно-практическая конференция «Современная промышленность в условиях нового технологического уклада» (Smart Industry 2022)',
              theme: 'Рефакторинг',
            },
            {
              id: 5,
              name: 'Всероссийская научно-практическая конференция с международным участием «Устойчивые продовольственные системы, технологии и безопасность пищевых продуктов» (SaFS 2022)',
              theme: 'Актуальность использования OOP',
            },
          ]);
        }, 1000);
      }).then((r: IConference[]) => {
        this.conferences = r;
        this.error = null;

        return r;
      });
    },
  },
});
