import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent {
  @Input() id = '';
  @Input() label = '';
  @Output() fileText = new EventEmitter<string>();

  constructor() {}

  onChange(fileList: FileList): void {
    const file = fileList[0];
    const fileReader: FileReader = new FileReader();
    const self = this;

    fileReader.onloadend = (x) => {
      self.fileText.emit(String(fileReader.result));
    };

    fileReader.readAsText(file, '\u676f\u845b');
  }

  selectFile() {
    console.log(this.id);
    const fileUpload = document.getElementById(
      'uploadFile'
    ) as HTMLInputElement;
    fileUpload.click();
  }
}
