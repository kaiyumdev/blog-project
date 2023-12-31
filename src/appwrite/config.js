// import { Client, Databases, ID, Query } from "appwrite";
// import conf from "../conf/conf";

import { Client, Databases, ID, Query } from "appwrite";
import conf from "../conf/conf";

// export class Service {
//   client = new Client();
//   databases;
//   bucket;

//   constructor() {
//     this.client
//       .setEndpoint(conf.appWriteUrl)
//       .setProject(conf.appWriteProjectId);

//     this.databases = new Databases(this.client);
//     this.bucket = new Storage(this.client);
//   }

//   async createPost({ title, slug, content, featuredImage, status, userId }) {
//     try {
//       await this.databases.createDocument(
//         conf.appWriteDatabaseId,
//         conf.appWriteCollectionId,
//         slug,
//         {
//           title,
//           content,
//           featuredImage,
//           status,
//           userId,
//         }
//       );
//     } catch (error) {
//       console.log("appwrite database error: ", error);
//     }
//   }

//   async updatePost(slug, { title, content, featuredImage, status, userId }) {
//     try {
//       return await this.databases.updateDocument(
//         conf.appWriteDatabaseId,
//         conf.appWriteCollectionId,
//         slug,
//         {
//           title,
//           content,
//           featuredImage,
//           status,
//           userId,
//         }
//       );
//     } catch (error) {
//       console.log("appwrite service updatePost: error", error);
//     }
//   }

//   async deletePost(slug) {
//     try {
//       await this.databases.deleteDocument(
//         conf.appWriteDatabaseId,
//         conf.appWriteCollectionId,
//         slug
//       );
//       return true;
//     } catch (error) {
//       console.log("appwrite service deletePost: error", error);
//       return false;
//     }
//   }

//   async getPost(slug) {
//     try {
//       return await this.databases.getDocument(
//         conf.appWriteDatabaseId,
//         conf.appWriteCollectionId,
//         slug
//       );
//     } catch (error) {
//       console.log("appwrite service getPost: error", error);
//       return false;
//     }
//   }

//   async getPosts(pueries = [Query.equal("status", "active")]) {
//     try {
//       return await this.databases.listDocuments(
//         conf.appWriteDatabaseId,
//         conf.appWriteCollectionId,
//         pueries
//       );
//     } catch (error) {
//       console.log("appwrite service getPost: error", error);
//     }
//   }

//   //file upload service
//   async uploadFile(file) {
//     try {
//       return await this.bucket.createFile(
//         conf.appWriteBucketId,
//         ID.unique(),
//         file
//       );
//     } catch (error) {
//       console.log("uploadService getPost: error", error);
//       return false;
//     }
//   }

//   async deleteFile(fileId) {
//     try {
//       await this.bucket.deleteFile(conf.appWriteBucketId, fileId);
//       return true;
//     } catch (error) {
//       console.log("uploadService deleteFile: error", error);
//     }
//   }

//   getFilePreview(fileId) {
//     try {
//       return this.bucket.getFilePreview(conf.appWriteBucketId, fileId);
//     } catch (error) {
//       console.log("uploadService getFilePreview: error", error);
//     }
//   }
// }

// const service = new Service();
// export default service;

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  //create a new database
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite serive :: createPost :: error", error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite serive :: updatePost :: error", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite serive :: deletePost :: error", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite serive :: getPost :: error", error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("Appwrite serive :: getPosts :: error", error);
      return false;
    }
  }

  // file upload service

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite serive :: uploadFile :: error", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("Appwrite serive :: deleteFile :: error", error);
      return false;
    }
  }

  getFilePreview(fileId) {
    return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
  }
}

const service = new Service();
export default service;
