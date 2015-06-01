System.register(["twbs/bootstrap", "./user/user", "./user/user-table"], function (_export) {
  var User, UserTable, users, userTable;
  return {
    setters: [function (_twbsBootstrap) {}, function (_userUser) {
      User = _userUser.User;
    }, function (_userUserTable) {
      UserTable = _userUserTable.UserTable;
    }],
    execute: function () {
      "use strict";

      users = [];

      users.push(new User("Luke", "Skywalker", "@luke"));
      users.push(new User("Anakin", "Skywalker", "@anakin"));
      users.push(new User("Obi-wan", "Kenobi", "@obiWan"));

      userTable = new UserTable(users);

      userTable.createTable();
    }
  };
});