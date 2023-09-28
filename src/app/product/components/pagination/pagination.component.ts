import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {

  options = [
    { value: 10, label: '5' },
    { value: 20, label: '10' },
    { value: 30, label: '15' },
  ];

  @Input() limit = 10;
  @Input() page = 0;
  @Input() count = 0;

  @Output() limitEvent = new EventEmitter<string>();
  @Output() pageEvent = new EventEmitter<string>();

  changeLimit(event: any) {
    this.limitEvent.emit(event?.target.value);
  }

  changePage(action: string) {
    this.pageEvent.emit(action);
  }

}
