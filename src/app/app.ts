import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { Emojis } from "./emojis/emojis";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Emojis],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'my-angular-app';
  public helloContent: string | undefined;

  constructor(private http: HttpClient) {
    this.http.get('/api/hello', { responseType: 'text' }).subscribe({
      next: (data) => this.helloContent = data,
      error: (err) => this.helloContent = 'Error: ' + (err?.message || err)
    });
  }
}
