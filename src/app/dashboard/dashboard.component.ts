import {Component, OnInit} from '@angular/core';
import {AnimalService} from "../service/animal.service";
import {Animal} from "../components/card/card.component";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  selectedType: string = '';
  selectedGender: string = '';
  searchQuery: string = '';
  page = 1;

  constructor(private animalService: AnimalService) {
  }

  animals: Animal[] = [];
  isLoading: boolean = true

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.animalService.getAll(this.searchQuery, this.selectedType, this.selectedGender, this.page)
      .subscribe((animals: Animal[]) => {
        this.animals = animals;
        this.isLoading = false;
      });
  }

  filter() {
    this.page = 1;
    this.fetchData()
  }

  handlePageChange($event: PageEvent) {
    this.page = $event.pageIndex + 1;
    this.fetchData();
  }
}
