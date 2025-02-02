import { TValidationResponse } from "./types/TValidationResponse.ts";
import { HttpClientService } from "./services/HttpClientService.ts";

class EmailValidator {
  protected logs: boolean;

  protected api: HttpClientService;

  public constructor(api: HttpClientService, logs = false) {
    this.api = api;
    this.logs = logs;
  }

  public async validate(email: string): Promise<TValidationResponse> {
    return await this.api.post<TValidationResponse>(
      "/verify/v1",
      { email },
      {},
    );
  }
}

export default EmailValidator;
