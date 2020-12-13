import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import firebase from 'firebase/app';
//import 'firebase/storage';
//import 'firebase/database';
import 'firebase/firestore';
import { UserService } from '../user.service';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.page.html',
  styleUrls: ['./uploader.page.scss'],
})
export class UploaderPage implements OnInit {

  entityName: string
  eventName: string
  eventAddress: string
  eventDate: Date
  danceStyle: string
  price: string
  eventImage: string
  firestore : any = firebase.firestore()

  constructor(
    public http: HttpClient,
    public afstore: AngularFirestore,
    public user: UserService
  ) { }

  ngOnInit() {
  }

  submitEvent() {
    const image = this.eventImage;
    const price = this.price;
    const danceStyle = this.danceStyle;
    const eventDate = this.eventDate;
    const eventAddress = this.eventAddress;
    const eventName = this.eventName;
    const entityName = this.entityName;

    this.afstore.doc(`users/${this.user.getUID()}`).update({
      posts: this.firestore.FieldValue.arrayUnion({
        entityName,
        eventName,
        eventAddress,
        eventDate,
        danceStyle,
        price,
        image
      })
    })
  }

  fileChanged(event) {
    const files = event.target.files
    console.log(files)
  }

}
