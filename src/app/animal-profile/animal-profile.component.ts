import {Component, OnInit} from '@angular/core';
import {Animal} from "../components/card/card.component";
import {AnimalService} from "../service/animal.service";
import {ActivatedRoute} from "@angular/router";
import {SnackbarService} from "../service/snackbar.service";

@Component({
  selector: 'app-animal-profile',
  templateUrl: './animal-profile.component.html',
  styleUrls: ['./animal-profile.component.css']
})
export class AnimalProfileComponent implements OnInit {
  animal!: Animal;
  adopted = false;
  isLoading:boolean=true;

  constructor(
    private route: ActivatedRoute,
    private animalService: AnimalService,
    private snackbarService: SnackbarService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!!;
    this.animalService.getAnimal(id)
      .subscribe((animal: Animal) => {
        this.animal = animal;
        this.isLoading = false;
      });
  }

  adoptAnimal() {
    this.animalService.updateAnimal(this.animal)
    this.adopted = true;
    this.snackbarService.showNotification('You have adopted ' + this.animal.name);
  }
}
