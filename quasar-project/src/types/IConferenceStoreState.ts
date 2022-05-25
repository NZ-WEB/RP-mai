import {IConference} from 'src/types/IConference';

export interface IConferenceStoreState {
  conferences: IConference[];
  error: null | Error;
}
