"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var userName = "Max";
var userAge = 34;
var isTrue = true;
var userId = "abc"; // Union type
var user;
user = {
    name: "Max",
    age: 34,
    isAdmin: true,
    id: "abc",
};
var hobbies;
hobbies = ["Playing guitar", "Walking", "Cooking"];
function add(a, b) {
    var result = a + b;
    return result;
}
function calculate(a, b, calcFn) {
    return calcFn(a, b);
}
console.info(calculate(2, 5, add));
var creds;
creds = {
    password: "abc",
    email: "test@example.com",
    mode: "logged in",
};
var AuthCredentials = /** @class */ (function () {
    function AuthCredentials() {
    }
    return AuthCredentials;
}());
function login(credentials) {
    console.log(credentials);
}
login(creds);
login(new AuthCredentials());
var admin;
admin = {
    permissions: ["login"],
    userName: "Max",
};
var role;
role = "admin";
role = "user";
role = "editor";
// role = "abc";
function performAction(action, role) {
    if (role === "admin" && typeof action === "string") {
        // ...
    }
}
var roles;
roles = ["admin", "user"];
var textStorage = {
    storage: [],
    add: function (data) {
        this.storage.push(data);
    },
};
var userStorage = {
    storage: [],
    add: function (data) {
        this.storage.push(data);
    },
};
function merge(a, b) {
    return __assign(__assign({}, a), b);
}
// const newUser = merge<{ name: string }, { age: number }>(
//   { name: "Max" },
//   { age: 34 }
// );
var newUser = merge({ name: "Max" }, { age: 34 });
newUser.age;
