import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
  selector: 'app-comp-loading',
  templateUrl: './comp-loading.component.html',
  styleUrls: ['./comp-loading.component.scss'],
})
export class CompLoadingComponent implements OnInit {
  constructor(public loading: LoadingService) {}

  ngOnInit(): void {}
}
