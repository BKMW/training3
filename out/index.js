"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GithubApiService_1 = require("./GithubApiService");
console.log("Hello world!");
var svc = new GithubApiService_1.GithubApiService();
svc.getUserInfo('bkmw', function (user) { return console.log(user); });
