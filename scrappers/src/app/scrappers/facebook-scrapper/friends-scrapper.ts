import { decodeDiacritics } from 'src/app/file-upload/facebook-encoding';
import { IFriend, IFriends } from './models/friends.model';

export function friendsScrapper(fileContent: string): string[] {
  const content = tryParseJSON(fileContent);

  if (content) {
    return scrapeJSON(content as IFriends);
  }

  return scrapeHTML(fileContent);
}

function tryParseJSON(content: string): IFriends | boolean {
  try {
    const o = JSON.parse(content) as IFriends;
    if (o && typeof o === 'object' && o.friends) {
      return o;
    }
  } catch (e) {}

  return false;
}

function scrapeJSON(json: IFriends): string[] {
  const friends: string[] = [];

  json.friends.forEach((friend: IFriend) => {
    friends.push(friend.name);
  });

  return decodeDiacritics(friends.join()).split(',').sort();
}

function scrapeHTML(html: string): string[] {
  const friends: string[] = [];
  const contentSplit = html.split('/');

  contentSplit.forEach((content) => {
    const friend = content.match(new RegExp('_2lel">(.*)<'));

    if (friend?.length && friend[1]) {
      friends.push(friend[1]);
    }
  });

  return friends.sort();
}

export function detectFormerFriends(
  oldFriends: string[],
  currentFriends: string[]
): string[] {
  const formerFriends: string[] = [];

  oldFriends.forEach((friend) => {
    if (!currentFriends.includes(friend)) {
      formerFriends.push(friend);
    }
  });

  return formerFriends;
}
