import { Component } from '@angular/core';
import { Country } from './Country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  countries: Country[] = [
    new Country("United States of America", "English", "/assets/us.png", "Joe Biden", ["Red", "Blue", "White"]),
    new Country("Canada", "English", "/assets/canada.png", "Justin Trudeau", ["Red", "White"]),
    new Country("Mexico", "Spanish", "/assets/mexico.png", "Andrés Manuel López Obrador", ["Green", "Red", "White"])
  ];
}
