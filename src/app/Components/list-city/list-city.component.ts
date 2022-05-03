import { Component, OnChanges, OnInit } from '@angular/core';
import { CityData } from 'src/app/modules/city-data';
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
  public listLocal: CityData | any
  //Create a local instance of private city list.
  public getAllCity: any;

  public alerta: boolean = false

  ngOnInit(): void {
    //  Recebe valor do Banco
    this.RecarregaValue()

    // Consome localmente os dados do serviço
    //this.listLocal = this.httprequest.ListLocal()

    this.httprequest.emitEvent.subscribe(

      res => alert(`Adcionou um Item => ${res}`)
    );

  }



  //Return the datas to Component
  public RecarregaValue() {
    return this.httprequest.getCity().subscribe(
      res => this.listLocal = res,
      error => error
    );
  }

  //Save values at Local variable just
  public listAddItem(value: string) {
    return this.httprequest.AddValueList(value)

  }

  //Save a new data on DB Fack
  public AddItemServer(value: string) {

    if (value) {

      this.httprequest.AddSalvaList(value).subscribe(
        res => res.id,
        error => error

      )
      this.Alertas

    } else {
      this.alerta == true
      console.log("Tem que alertar" + this.alerta)
    }
    return
  }

  public valor: boolean = false


  public Alertas(data: string) {
    if (!data) {
      this.valor = true
    } else {
      this.valor = false
    }
    return this.valor

  }


}
