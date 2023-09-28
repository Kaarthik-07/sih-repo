import { loginParams } from "./interfaces";

export function loginUtil({ userName, password }: loginParams) {
  console.log(userName, password);
  return 1;
}
