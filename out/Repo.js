"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Repo = /** @class */ (function () {
    function Repo(repo) {
        this.name = "";
        this.description = "";
        this.url = "";
        this.size = 0;
        this.forkCount = 0;
        this.name = repo.name;
        this.description = repo.description;
        this.url = repo.html_url;
        this.size = repo.html_size;
        this.forkCount = repo.forks;
    }
    return Repo;
}());
exports.Repo = Repo;
