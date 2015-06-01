System.register([], function (_export) {
	var _createClass, _classCallCheck, User;

	return {
		setters: [],
		execute: function () {
			"use strict";

			_createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

			_classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

			User = _export("User", (function () {
				function User(firstName, lastName, userName) {
					_classCallCheck(this, User);

					this.firstName = firstName;
					this.lastName = lastName;
					this.userName = userName;
				}

				_createClass(User, {
					fullName: {
						get: function () {
							return this.firstName + " " + this.lastName;
						}
					}
				});

				return User;
			})());
		}
	};
});