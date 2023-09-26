import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, pipe, tap} from "rxjs";
import {Animal} from "../components/card/card.component";

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  baseUrl: string = '/api/animals'

  constructor(private http: HttpClient) {
  }

  limit: number = 10;
  animals: Animal[] = []
  filteredAnimals: Animal[] = []

  getAll(searchQuery: string, type: string, gender: string, page: number = 1) {
    let params: HttpParams = new HttpParams()
    params = params.set('_limit', this.limit)
    params = params.set('_page', page)
    if (type) params = params.set('type', type);
    if (gender) params = params.set('gender', gender);

    if (searchQuery) {
      this.filteredAnimals = this.animals.filter((animal) =>
        animal.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        animal.breed.toLowerCase().includes(searchQuery.toLowerCase())
      );

      return new Observable<Animal[]>((observer) => {
        observer.next(this.filteredAnimals);
        observer.complete();
      });
    } else {
      return this.http.get<Animal[]>(this.baseUrl, {params}).pipe(
        tap((animals: Animal[]) => {
          this.animals = animals;
          this.filteredAnimals = animals;
        })
      );
    }
  }

  getAnimal(id: string) {
    return this.http.get<Animal>(`${this.baseUrl}/${id}`).pipe(
      tap((animal: Animal) => {
        return animal
      })
    );
  }

  updateAnimal(animal: Animal) {
    const updatedAnimal: Animal = {...animal, adopted: true};

    return this.http.put<Animal>(`${this.baseUrl}/${updatedAnimal.id}`, updatedAnimal);
  }
}
