import conf from "../conf/Conf";

import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;
        
        constructor(){
            this.client
                setEndpoint(conf.appwriteurl)
                setProject(conf.appwriteProjectId);
                this.account = new Account(this.client);
        }

        async CreateAccount ({Email,Password,Name}){
            try {
               const userAccount= await this.account(ID.unique(),Email,Password,Name);
                if (userAccount) {
                    return this.Login
                }else{
                    return userAccount;
                }
            } catch (error) {
                throw error
            }
        }

        async Login ({Email,Password}){
            try {
                return await this.account.createEmailPasswordSession(Email,Password)
            } catch (error) {
                throw error
            }
        }

        }


const authService = new AuthService();

export default authService