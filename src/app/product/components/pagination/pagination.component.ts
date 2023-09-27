import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {

  options = [
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 30, label: '30' },
  ];

}
