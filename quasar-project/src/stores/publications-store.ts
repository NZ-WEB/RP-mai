import { defineStore } from 'pinia';
import {IPublicationsStoreState} from 'src/types/IPublicationsStoreState';
import {IPublication} from 'src/types/IPublication';

export const usePublicationsStore = defineStore('publications', {
  state: () => ({
    publications: [],
    error: null
  }) as IPublicationsStoreState,

  getters: {
    getPublications(state: IPublicationsStoreState): IPublication[] {
      return state.publications;
    }
  },

  actions: {
    async loadAll(): Promise<IPublication[]> {
      return await new Promise<IPublication[]>(res => {
        setTimeout(() => {
          res([
            {
              publicationId: 1,
              topicName: 'Публикация первая',
              publishingHouseName: 'Место проведения конференций'
            },
            {
              publicationId: 2,
              topicName: 'Публикация вторая',
              publishingHouseName: 'Место проведения конференций'
            },
            {
              publicationId: 3,
              topicName: 'Публикация третья',
              publishingHouseName: 'Место проведения конференций'
            },
            {
              publicationId: 4,
              topicName: 'Публикация четвёртая',
              publishingHouseName: 'Место проведения конференций'
            },
          ])
        }, 1000)
      }).then(r => {
        this.publications = r;
        this.error = null;

        return r;
      });
    }
  }
});
