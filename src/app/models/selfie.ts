import {Wookie} from "./wookie";

export class Selfie {
  image: string | undefined;
  wookie: Wookie;
  constructor() {
    this.wookie = new Wookie();
  }
}
