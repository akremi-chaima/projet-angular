import {Wookie} from "./wookie";

export class Selfie {
  image: string | undefined;
  wookie: Wookie;
  titre: string | undefined;
  constructor() {
    this.wookie = new Wookie();
  }
}
