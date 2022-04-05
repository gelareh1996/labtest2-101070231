import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {

  constructor() { }

  GetListData() {
    return fetch("https://api.spacexdata.com/v3/launches/")
  }
  GetDetailData(id: string) {
    return fetch("https://api.spacexdata.com/v3/launches/"+id)
  }
}
