import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpacexapiService } from '../network/spacexapi.service'
import { ISpacexData } from '../models/mission'

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.scss']
})
export class MissiondetailsComponent implements OnInit {

  launche: ISpacexData | undefined
  isLoading: boolean = true
  constructor(private route: ActivatedRoute, private data:SpacexapiService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getData(id)
  }

  getData(id: any) {
    this.data.GetDetailData(id).then((response) => {
      response.json().then((res) => {
        this.launche = res
        this.isLoading = false
      })
    }).catch((err) => {
      console.log(err)
    })
  }

}
