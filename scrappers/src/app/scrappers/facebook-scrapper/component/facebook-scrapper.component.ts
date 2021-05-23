import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { detectFormerFriends, friendsScrapper } from '../friends-scrapper';
import { RESULT_NOTE_MESSAGE } from '../models/friends.model';

@Component({
  selector: 'app-facebook-scrapper',
  templateUrl: './facebook-scrapper.component.html',
  styleUrls: ['./facebook-scrapper.component.scss'],
})
export class FacebookScrapperComponent {
  formerFriends: string[] = [];
  resultsNoteMessage = RESULT_NOTE_MESSAGE;
  noChangesMessage = '';
  oldFriends: string[] = [];
  currentFriends: string[] = [];

  constructor(private snackbar: MatSnackBar) {}

  onBeforeFriendsFileUpload(fileText: string): void {
    this.oldFriends = this.scrapeFriendsFile(fileText);
  }

  onCurrentFriendsFileUpload(fileText: string): void {
    this.currentFriends = this.scrapeFriendsFile(fileText);
  }

  onDetectFormerFriends(): void {
    this.formerFriends = detectFormerFriends(
      this.oldFriends,
      this.currentFriends
    );

    if (!this.formerFriends.length) {
      this.noChangesMessage = 'No changes found! You are a good friend! :)';
    }
  }

  private scrapeFriendsFile(fileText: string): string[] {
    const friends = friendsScrapper(fileText);
    if (!this.checkIfEmpty(friends)) {
      this.resetResultVars();
      return friends;
    }

    return [];
  }

  private checkIfEmpty(friends: string[]): boolean {
    if (!friends.length) {
      const config: MatSnackBarConfig = {
        duration: 8000,
      };

      this.snackbar.open(
        'Uploaded file contains none of your friends! Please upload different one.',
        'X',
        config
      );
      return true;
    }

    return false;
  }

  private resetResultVars(): void {
    this.formerFriends = [];
    this.noChangesMessage = '';
  }
}
