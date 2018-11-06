import { GithubApiService } from "./GithubApiService";
import { User } from "./User";
import { Repo } from "./Repo";

console.log("Hello world!");
let svc=new GithubApiService();
svc.getUserInfo('bkmw',(user:User)=>console.log(user));
svc.getRepos('bkmw',(repos:Repo[])=>console.log(repos));