import {Component, View, bootstrap, Input} from 'angular2/angular2';
import {Inject} from 'angular2/core';
import DataService from '../../services/data-service';

@Component({
    selector: 'app-cmp'
})
@View({
    template: `<div style="margin: 20px 0"><span>{{data.login}}</span> | <span> {{userData.name}}</span> <span><img style="height:100px;width:100px;vertical-align:middle;margin: 0 20px;" src="{{userData.avatar_url}}"><span></div>`
})
export default class NamesComponent {
    @Input() data: any;
    userData: any;
    _dataService: DataService;
    constructor( @Inject(DataService) dataService: DataService) {
      this._dataService = dataService;
    }

    onInit() {
      this._dataService.getUserNames(this.data.login).then((response) => {
          console.log(response.data);
          this.userData = response.data;
      });
    }
}
