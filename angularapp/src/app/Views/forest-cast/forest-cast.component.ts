import { Component} from '@angular/core';
import { HttpService } from '../../Services/http.service';

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Component({
  selector: 'app-forest-cast',
  templateUrl: './forest-cast.component.html',
  styleUrls: ['./forest-cast.component.css']
})
export class ForestCastComponent {

  public forecasts?: WeatherForecast[];

  constructor(private http: HttpService) {
    this.http.GetForestCast().subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }

}
