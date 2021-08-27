import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  public loading = false;

  toggle(value: boolean) {
    this.loading = value;
  }
}
