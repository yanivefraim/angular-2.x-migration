import {Component, View} from 'angular2/angular2';

@Component({
  selector: 'ng2-comp',
  inputs: ['data']
})
@View({
  template: `{{data.firstName}} {{data.lastName}}`
})
export class NamesComponent {
  constructor () {
    //123
  }
}
