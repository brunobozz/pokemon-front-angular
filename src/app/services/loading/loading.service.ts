import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  public loading = false;

  toggle(value: boolean) {
    this.loading = value;
  }
}
