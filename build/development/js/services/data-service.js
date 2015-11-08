var DataService = (function () {
    function DataService($http) {
        this.$http = $http;
        //
    }
    DataService.prototype.getItems = function () {
        return this.$http.get('https://api.github.com/repos/angular/angular/contributors');
    };
    DataService.prototype.getUserNames = function (login) {
        console.log(login);
        return this.$http.get("https://api.github.com/users/" + login);
    };
    return DataService;
})();
exports.default = DataService;

//# sourceMappingURL=../maps/services/data-service.js.map