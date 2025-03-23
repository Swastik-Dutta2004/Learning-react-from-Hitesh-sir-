import conf from "../conf/Conf";

import { Client,ID, Databases,Storage,Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        setEndpoint(conf.appwriteurl)
        setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
        }

        async createPost ({title, slug,content,featureImage,status,userId}){
            try {
              return await this.databases.createDocument(
               conf.appwriteDataBaseId,
               conf.appwriteCollectionId,
               slug,
                {title, slug,content,featureImage,status,userId}
              )  
            } catch (error) {
                console.log("Appwrite serive :: GetCurrentUser ::error", error);
            }
        }
        
}

const service = new Service()

export default service