import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent {
  @Input() label = '';
  @Input() filesFormats = '';
  @Output() fileText = new EventEmitter<string>();

  constructor() {}

  onChange(fileList: FileList): void {
    const file = fileList[0];
    const fileReader: FileReader = new FileReader();
    const self = this;

    fileReader.onloadend = () => {
      self.fileText.emit(String(fileReader.result));
    };

    if (file) {
      fileReader.readAsText(file);
    }
  }
}
