System.register([], function (_export) {
	var _createClass, _classCallCheck, UserTable;

	return {
		setters: [],
		execute: function () {
			"use strict";

			_createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

			_classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

			UserTable = _export("UserTable", (function () {
				function UserTable() {
					var users = arguments[0] === undefined ? [] : arguments[0];

					_classCallCheck(this, UserTable);

					this.users = users;
					this.table = document.querySelector("#users");
				}

				_createClass(UserTable, {
					createHeader: {
						value: function createHeader() {
							if (!this.users.length) {
								return;
							}

							if (!this.thead) {
								this.thead = document.createElement("thead");

								var tr = document.createElement("tr");
								var thFirst = document.createElement("th");
								var thLast = document.createElement("th");
								var thUser = document.createElement("th");

								thFirst.textContent = "First Name";
								tr.appendChild(thFirst);

								thLast.textContent = "Last Name";
								tr.appendChild(thLast);

								thUser.textContent = "Username";
								tr.appendChild(thUser);

								this.thead.appendChild(tr);

								this.table.appendChild(this.thead);
							}
						}
					},
					createBody: {
						value: function createBody() {
							var _this = this;

							if (!this.tbody) {
								this.tbody = document.createElement("tbody");
							}

							this.users.forEach(function (user) {
								var row = document.createElement("tr");
								var firstNameData = document.createElement("td");
								var lastNameData = document.createElement("td");
								var userNameData = document.createElement("td");

								firstNameData.textContent = user.firstName;
								lastNameData.textContent = user.lastName;
								userNameData.textContent = user.userName;

								row.appendChild(firstNameData);
								row.appendChild(lastNameData);
								row.appendChild(userNameData);

								_this.tbody.appendChild(row);
							});

							this.table.appendChild(this.tbody);
						}
					},
					createTable: {
						value: function createTable() {
							this.createHeader();
							this.createBody();
						}
					}
				});

				return UserTable;
			})());
		}
	};
});