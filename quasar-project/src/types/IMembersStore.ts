import { IUsers } from 'src/types/IUsers';
import { IMember } from 'src/types/IMember';

export interface IMembersStore {
  membersList: IUsers[];
  member: IMember;
}
