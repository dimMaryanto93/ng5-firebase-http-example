import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(): void {
    const messages = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('data pertama');
      }, 2000);
      setTimeout(() => {
        observer.next('data kedua');
      }, 4000);
      setTimeout(() => {
        observer.complete();
      }, 4000);
    });
    messages.subscribe(
      data => console.log(data),
      error => console.log(error),
      () => console.log('complate message')
    );
  }
}
