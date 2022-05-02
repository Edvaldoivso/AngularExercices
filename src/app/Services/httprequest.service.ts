import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class HTTPrequestService {

  constructor(private http: HttpClient) { }

  BaseUrl: string = 'https://apiadvisor.climatempo.com.br/api/v1/locale/city?province=SP&token=51a4173d9feffc51771fd70398960ec1'


  //Oferece dados da API
  get getCity(): Observable<any> {

    // console.log(this.BaseUrl)
    //Share and get online data provided by API
    return this.http.get<any>(this.BaseUrl).pipe(
      tap((res) => res),

    )

  }

  public emitEvent = new EventEmitter();

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

}
