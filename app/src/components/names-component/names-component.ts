import {Component, View, bootstrap, Input} from 'angular2/angular2';
import {Inject} from 'angular2/core';
import DataService from '../../services/data-service';

@Component({
    selector: 'app-cmp'
})
@View({
    template: `<div style="margin: 20px 0"><span (click)=doClick()>{{data.login}}</span> | <span> {{userData.name}}</span> <span><img style="height:100px;width:100px;vertical-align:middle;margin: 0 20px;" src="{{userData.avatar_url}}" /></span></div>`
})
export default class NamesComponent {
    @Input() data: any;
    userData: any;
    _dataService: DataService;
    constructor( @Inject(DataService) dataService: DataService) {
      this.userData = {};
      this._dataService = dataService;
    }

    onInit() {
      console.log(this.data.login);
      this._dataService.getUserNames(this.data.login).then((response) => {
          this.userData = response.data;
      });
    }

    // doClick() {
    //   console.log(this.data.login);
    //   this._dataService.getUserNames(this.data.login).then((response) => {
    //     debugger;
    //     console.log(response.data);
    //     this.userData = response.data;
    //   });
    // }
}
