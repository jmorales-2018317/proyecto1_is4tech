import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface DogApiResponse {
  message: string;
}

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {
  // Random Dog Image
  randomDog = '';
  // WhiteSpace
  inputText = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<DogApiResponse>('https://dog.ceo/api/breeds/image/random')
      .subscribe(data => {
        this.randomDog = data.message;
      });
  }

  regenerate() {
    this.ngOnInit();
  }

  cleanText() {
    this.inputText = '';
  }
}
