import { assertEquals } from "@std/assert";
import { stub } from "https://deno.land/x/mock@0.15.2/mod.ts";

import Sdk from "./main.ts";
import { TValidationResponse } from "./src/types/TValidationResponse.ts";

Deno.test("validates an email successfully", async () => {
  const token = "your-access-token";
  const sdk = new Sdk(token);

  const valid_email = "test@gmail.com";

  const mockResponse: TValidationResponse = {
    reason: "Email is invalid",
    domain: "gmail.com",
    user: "test@gmail.com",
    email: valid_email,
    disposable: false,
    status: "valid",
  };

  const validateStub = stub(
    sdk.validator,
    "validate",
    () => Promise.resolve(mockResponse),
  );

  const response = await sdk.validator.validate(valid_email);

  assertEquals(response.status, "valid");
  assertEquals(response.reason, "Email is invalid");
  assertEquals(response.domain, "gmail.com");
  assertEquals(response.user, "test@gmail.com");
  assertEquals(response.email, valid_email);
  assertEquals(response.disposable, false);

  validateStub.restore();
});
