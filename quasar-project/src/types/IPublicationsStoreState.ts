import { IPublication } from 'src/types/IPublication';

export interface IPublicationsStoreState {
  publications: IPublication[];
  error: Error | null;
}
