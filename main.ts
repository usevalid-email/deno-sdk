import "jsr:@std/dotenv/load";
import Sdk from "./src/Sdk.ts";

export const useValidEmail = (token: string) => {
  const sdk = new Sdk(token);
  return sdk.validator;
};

export default Sdk;
