import {INir} from 'src/types/INir';

export interface INirsStoreState {
  nirs: INir[];
  error: null | Error;
}
