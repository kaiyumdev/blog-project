import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
}

const authService = new AuthService();
export default authService;
