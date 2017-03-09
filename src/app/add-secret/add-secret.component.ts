import { Component, OnInit, NgZone } from '@angular/core';
import { SessionService    } from '../services/session.service';
import { SecretsService    } from '../services/secrets.service';
import { Router            } from '@angular/router';
import { FileUploader      } from "ng2-file-upload";

@Component({
  selector: 'app-add-secret',
  templateUrl: './add-secret.component.html',
  styleUrls: ['./add-secret.component.css']
})
export class AddSecretComponent implements OnInit {
  uploader: FileUploader = new FileUploader({
   url: `http://localhost:3000/api/secrets/add`
    });

  secrets: any;

  newSecret = {
    where       : " ",
    location    : " ",
    what        : " ",
    description : " ",
    tips        : " ",
    when        : " "
  };

  feedback: string;

  constructor(
    private secret : SecretsService,
    private router : Router
  ) { }

  ngOnInit() {
    this.uploader.onSuccessItem = (item, res) => {
      this.feedback = JSON.parse(res).message;
      this.router.navigate(['/api/secrets']);
    }

    this.uploader.onErrorItem = (item, res, status, headers) => {
      this.feedback = JSON.parse(res).message;
      console.log("error");
    }
  }


  addNewSecret() {
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('where', this.newSecret.where);
      form.append('location', this.newSecret.location);
      form.append('what', this.newSecret.what);
      form.append('description', this.newSecret.description);
      form.append('tips', this.newSecret.tips);
      form.append('when', this.newSecret.when)

    };
    this.uploader.uploadAll();

  }

}
