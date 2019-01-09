import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private service : AdminService) { }
  filesToUpload: Array<File> = [];

  ngOnInit() {

    this.filesToUpload = [];

  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
    upload() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    console.log(files)
    formData.append("questionAnswer", files[0]);
    console.log(files[0]['name'])
    console.log(formData);
    this.service.upload(formData);
  }
  uploadHoliday()
  {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    console.log(files)
    formData.append("holiday", files[0]);
    console.log(files[0]['name'])
    this.service.uploadHoliday(formData);
  }

}
