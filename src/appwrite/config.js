import { Client, Databases } from "appwrite";
import conf from "../conf/conf";

export class Service {
  client = new Client();
  database;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appWriteUrl)
      .setProject(conf.appWriteProjectId);

    this.database = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }
}
