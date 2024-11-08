import { UnmutableConstants } from "./unmutable-constans";

export class Constants extends UnmutableConstants {
  static readonly appHost = "http://ec2-54-193-205-101.us-west-1.compute.amazonaws.com:3000";
  //static readonly appHost = "https://app-cafe-don-emilio.com/";
  static readonly apiBaseUrl = "CafeDonEmilioWS/api";

  static readonly modoOffline = false;
}
