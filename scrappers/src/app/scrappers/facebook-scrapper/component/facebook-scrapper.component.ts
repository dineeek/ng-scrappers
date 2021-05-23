import { Component } from '@angular/core';
import { detectFormerFriends, friendsScrapper } from '../friends-scrapper';

@Component({
  selector: 'app-facebook-scrapper',
  templateUrl: './facebook-scrapper.component.html',
  styleUrls: ['./facebook-scrapper.component.scss'],
})
export class FacebookScrapperComponent {
  formerFriends: string[] = [];
  changesMessage = '';
  oldFriends: string[] = [];
  currentFriends: string[] = [];

  constructor() {}

  onBeforeFriendsFileUpload(fileText: any): void {
    this.oldFriends = friendsScrapper(fileText);
    this.resetResultVars();
  }

  onCurrentFriendsFileUpload(fileText: any): void {
    this.currentFriends = friendsScrapper(fileText);
    this.resetResultVars();
  }

  onDetectFormerFriends(): void {
    this.formerFriends = detectFormerFriends(
      this.oldFriends,
      this.currentFriends
    );

    if (!this.formerFriends.length) {
      this.changesMessage = 'No changes found! You are a good friend! :)';
    }
  }

  private resetResultVars(): void {
    this.formerFriends = [];
    this.changesMessage = '';
  }
}
