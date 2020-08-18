import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  resArr: Array<string> = [];
  loaderFlag: Boolean = false;

  profileForm = new FormGroup({
    startUrl: new FormControl('http://', [Validators.required]),
    maxDepth: new FormControl('', [Validators.required]),
    maxPages: new FormControl('', [Validators.required])
  });


  constructor(private ApiService: ApiServiceService, public dialog: MatDialog ) { }

  ngOnInit(): void {
  }

  keyPress(event: KeyboardEvent) {
    const keycode = event.keyCode;
    if(keycode > 47 && keycode < 58) {
      return true;
    }
    return false;
  }

  onSend() {
    this.loaderFlag = true;
    this.ApiService.postCrawlingData(this.profileForm.value).subscribe((res: any) => {
      this.loaderFlag = false;
      this.resArr = [];
      if(res) {
        this.profileForm.reset();
      }
      res.forEach(element => {
        this.resArr.push(element);
      });
    });
  }



}
