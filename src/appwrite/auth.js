/* eslint-disable no-useless-catch */
/* eslint-disable no-unused-vars */
import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

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
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthService();
export default authService;
