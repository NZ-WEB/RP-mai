import { defineStore } from 'pinia';
import { INirsStoreState } from 'src/types/INirsStoreState';
import { INir } from 'src/types/INir';

export const useNirsStore = defineStore('nirs', {
  state: () =>
    ({
      nirs: [],
      error: null,
    } as INirsStoreState),

  getters: {
    getNirs(state: INirsStoreState): INir[] {
      return state.nirs;
    },
  },

  actions: {
    loadAll(): Promise<INir[]> {
      return new Promise<INir[]>((res) => {
        setTimeout(() => {
          res([
            {
              code: '1',
              leadCustomer: 'Шляпик А. М.',
              Customer: 'ОАО ПРОФМОССТРОЙ',
              fullWorkTitle:
                'Разработка блока автоудержания баланса беспилотников высокой степени контроля 1',
              shortWorkTitle: 'Разработка БАУБ 1',
              contractNumber: 191488228,
              contractDate: '12.14.2019',
              topicNumber: 12,
              workType: 'Програмное обеспечение',
              workPrice: 1337,
              startDate: '12.12.2015',
              endDate: '13.01.2016',
              stagesNumber: 5,
              workPriceStructureId: 12,
              responsibleExecutorLogin: '12abcTest',
            },
            {
              code: '2',
              leadCustomer: 'Шляпик А. М.',
              Customer: 'ОАО ПРОФМОССТРОЙ',
              fullWorkTitle:
                'Разработка блока автоудержания баланса беспилотников высокой степени контроля 2',
              shortWorkTitle: 'Разработка БАУБ 2',
              contractNumber: 191488228,
              contractDate: '12.14.2019',
              topicNumber: 12,
              workType: 'Програмное обеспечение',
              workPrice: 1337,
              startDate: '12.12.2015',
              endDate: '13.01.2016',
              stagesNumber: 5,
              workPriceStructureId: 12,
              responsibleExecutorLogin: '12abcTest',
            },
            {
              code: '3',
              leadCustomer: 'Шляпик А. М.',
              Customer: 'ОАО ПРОФМОССТРОЙ',
              fullWorkTitle:
                'Разработка блока автоудержания баланса беспилотников высокой степени контроля 3',
              shortWorkTitle: 'Разработка БАУБ 3',
              contractNumber: 191488228,
              contractDate: '12.14.2019',
              topicNumber: 12,
              workType: 'Програмное обеспечение',
              workPrice: 1337,
              startDate: '12.12.2015',
              endDate: '13.01.2016',
              stagesNumber: 5,
              workPriceStructureId: 12,
              responsibleExecutorLogin: '12abcTest',
            },
          ]);
        }, 1000);
      }).then((r) => {
        this.nirs = r;
        this.error = null;

        return r;
      });
    },
  },
});
