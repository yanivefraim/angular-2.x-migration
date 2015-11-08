export default class DataService {
  constructor(private $http: any) {
    //
  }

  getItems() {
    return this.$http.get('https://api.github.com/repos/angular/angular/contributors');
  }

  getUserNames(login: string) {
    console.log(login);
    return this.$http.get(`https://api.github.com/users/${login}`);
  }
}
