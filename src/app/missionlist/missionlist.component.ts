import { Component, NgModule, OnInit } from '@angular/core';
import { ISpacexData } from '../models/mission';
import { SpacexapiService } from '../network/spacexapi.service'

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.scss']
})
export class MissionlistComponent implements OnInit {

  launches: ISpacexData[] = []
  isLoading: boolean = true
  constructor(private data:SpacexapiService) { }

  ngOnInit(): void {
    this.getData()
  }
  getData() {
    this.data.GetListData().then((response) => {
      response.json().then((res) => {
        this.launches = res
        this.isLoading = false
      })
    }).catch((err) => {
      console.log(err)
    })
  }
}
