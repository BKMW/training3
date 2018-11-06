import { GithubApiService } from "./GithubApiService";
import { User } from "./User";

console.log("Hello world!");
let svc=new GithubApiService();
svc.getUserInfo('bkmw',(user:User)=>console.log(user));