/* eslint-disable no-useless-catch */
/* eslint-disable no-unused-vars */
import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

//create authService
export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appWriteUrl)
      .setProject(conf.appWriteProjectId);
    this.account = new Account(this.client);
  }

  //create a new account
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        //call another method
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("appwrite service :: getCurrentUser ::error", error);
    }
    return null;
  }

  async logOut() {
    try {
      await this.account.deleteSession();
    } catch (error) {
      console.log("appwrite service :: logout :: error", error);
    }
  }
}

const authService = new AuthService();
export default authService;
