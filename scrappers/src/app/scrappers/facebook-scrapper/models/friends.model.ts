export interface IFriends {
  friends: IFriend[];
}

export interface IFriend {
  name: string;
  timeStamp: string;
}

export const RESULT_NOTE_MESSAGE =
  'The result of comparison two uploaded files does not take into account changed person name or surname!';
