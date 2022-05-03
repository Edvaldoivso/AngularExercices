import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subscriber, tap } from 'rxjs';
import { catchError, retry, subscribeOn } from 'rxjs/operators';
import { CityData } from '../modules/city-data';



@Injectable({
  providedIn: 'root'
})
export class HTTPrequestService {

  constructor(private http: HttpClient) { }

  //private BaseUrl: string = 'https://apiadvisor.climatempo.com.br/api/v1/locale/city?province=SP&token=51a4173d9feffc51771fd70398960ec1'
  public BaseUrl: string = 'http://localhost:3000/list-City'


  public emitEvent = new EventEmitter();

  //Oferece dados da API
  public getCity(): Observable<CityData> {

    return this.http.get<CityData>(this.BaseUrl)
      .pipe(
        res => res,
        error => error
      )
  }




  //Instance of Local Data
  private CityList: Array<string> = [
    "São Paulo",
    "Adamantina",
    "Sorocaba",
    "Barretos"

  ]

  //Create a local instance to use in another components refer by private Method
  public ListLocal() {
    return this.CityList;
  }

  //Method to input data on local list reciving a variable named value as paramether
  public AddValueList(value: string) {
    this.ListCityAlert(value);
    return this.CityList.push(value);

  }

  public ListCityAlert(value: string) {
    return this.emitEvent.emit(value)

  }


  public AddSalvaList(value: string): Observable<CityData> {

    return this.http.post<CityData>(this.BaseUrl, { name : value }).pipe(
      res => res,
      error => error
     
    )

  }



}
