import { HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HTTPrequestService } from 'src/app/Services/httprequest.service';

@Component({
  selector: 'list-city',
  templateUrl: './list-city.component.html',
  styleUrls: ['./list-city.component.scss']
})
export class ListCityComponent implements OnInit {

  //Insert dependences
  constructor(private httprequest: HTTPrequestService) { }

  //Create a local instance of  private Service.
  public listLocal: Array<String> = []
  //Create a local instance of private city list.
  public getAllCity: any;


  ngOnInit(): void {

    //Return the datas to Component
    this.httprequest.getCity.subscribe(
      res => {
        this.getAllCity = res.results
      })

    // Consome localmente os dados do serviço
    this.listLocal = this.httprequest.ListLocal()

    this.httprequest.emitEvent.subscribe(
      res => alert(`Adcionou um Item => ${res}`)
    );

  }

  public listAddItem(value: string) {
   return this.httprequest.AddValueList(value)
   
  }


}
