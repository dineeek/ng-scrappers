import { Component } from '@angular/core';
import { detectFormerFriends, friendsScrapper } from './friends-scrapper';

@Component({
  selector: 'app-facebook-scrapper',
  templateUrl: './facebook-scrapper.component.html',
  styleUrls: ['./facebook-scrapper.component.scss'],
})
export class FacebookScrapperComponent {
  formerFriends: string[] = [];
  oldFriends: string[] = [];
  currentFriends: string[] = [];

  constructor() {}

  onBeforeFriendsFileUpload(fileText: any): void {
    console.log('DINo 1');
    this.oldFriends = friendsScrapper(fileText);
  }

  onCurrentFriendsFileUpload(fileText: any): void {
    console.log('DINo 2');
    this.currentFriends = friendsScrapper(fileText);
  }

  onDetectFormerFriends(): void {
    this.formerFriends = detectFormerFriends(
      this.oldFriends,
      this.currentFriends
    );
  }
}
