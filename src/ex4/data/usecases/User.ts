import { IUser } from "../../domain/models/IUser";

export class User implements IUser {
  constructor(readonly name: string, readonly zip: string) { }
}