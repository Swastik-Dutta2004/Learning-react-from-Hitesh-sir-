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
                {title,content,featureImage,status,userId}
              )  
            } catch (error) {
                console.log("Appwrite serive :: GetCurrentUser ::error", error);
            }
        }
        async updatePost (slug,{title,content,featureImage,status,userId}){
            try {
              return await this.databases.updateDocument(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                slug,
                {title,content,featureImage,status,}
              )  
            } catch (error) {
                console.log("Appwrite serive :: GetCurrentUser ::error", error);
            }
        }
        async deletePost (slug){
            try {
               await this.databases.deleteDocument(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                slug
               ) 
               return true;
            } catch (error) {
                console.log("Appwrite serive :: GetCurrentUser ::error", error);  
                return false;
            }
        }
        async getPost(slug){
            try {
                return await this.databases.getDocument(
                    conf.appwriteDataBaseId,
                    conf.appwriteCollectionId,
                    slug
                )
            } catch (error) {
                console.log("Appwrite serive :: GetCurrentUser ::error", error);  
                return false
            }
        }
        async getPosts(queries = [Query.equal("status","active")]){
            try {
              return await this.databases.listDocuments(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                queries,
              )  
            } catch (error) {
                console.log("Appwrite serive :: GetCurrentUser ::error", error);
                return false;
            }
        }
        async uplodeFile (file){
            try {
                return await this.bucket.createFile(conf.appwriteBucketId,
                    ID.unique(),
                    file,
                )
            } catch (error) {
                console.log("Appwrite serive :: GetCurrentUser ::error", error);
                return false
            }
        }
        async deleteFile (fileid){
            try {
                await this.bucket.deleteFile(conf.appwriteBucketId,fileid,)
                return true;
            } catch (error) {
                console.log("Appwrite serive :: GetCurrentUser ::error", error);
                return false;
            }
        }
        
        getfilePreview(fileid){
            return this.bucket.getFilePreview(
                conf.appwriteBucketId,fileid,
            )
        }

}

const service = new Service()

export default service