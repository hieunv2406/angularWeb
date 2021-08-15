import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-services',
  templateUrl: './detail-services.component.html',
  styleUrls: ['./detail-services.component.scss']
})
export class DetailServicesComponent implements OnInit {

  public idViewGrid = 'packageList';
  public active = 1;

  listMenu = [
    {id:'serviceDetail', text:'Service Details'},
    {id:'routes', text:'Routes'},
    {id:'plugins', text:'Plugins'},
    {id:'consumers', text:'Eligible consumers'},
  ]
  constructor() { }

  ngOnInit(): void {
    this.idViewGrid = 'serviceDetail'
  }
  setViewGrid(e){
    this.idViewGrid = e
  }

}
