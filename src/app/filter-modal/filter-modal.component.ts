import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss']
})
export class FilterModalComponent implements OnInit {
  filterForm!: FormGroup;
  display: boolean = false;

  @Output() filtersApplied = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.filterForm = this.fb.group({
      title: [''],
      artist: [''],
      classification: [''],
      yearRange: ['']
    });
  }

  showDialog() {
    this.display = true;
  }

  applyFilters(): void {
    this.filtersApplied.emit(this.filterForm.value);
    this.display = false;
  }
}
