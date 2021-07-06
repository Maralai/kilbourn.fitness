import { Component, OnInit } from '@angular/core';
import {WeightEntry} from '../models/weight.model';
import {WeightService} from '../weight.service';

@Component({
  selector: 'app-weight-list',
  templateUrl: './weight-list.component.html',
  styleUrls: ['./weight-list.component.css']
})
export class WeightListComponent implements OnInit {
  weightEntries: WeightEntry[] = [];
  showForm = false;

  constructor(private service: WeightService) { }

  ngOnInit(): void {
    this.getWeightEntries();
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  async getWeightEntries(): Promise<void> {
    this.weightEntries = await this.service.loadWeightEntries();
  }
}
