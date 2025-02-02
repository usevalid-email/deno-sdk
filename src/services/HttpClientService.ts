import Sdk from "../Sdk.ts";

type TFetchOptions = {
  headers: object;
  baseURL: string;
};

export class HttpClientService {
  protected logs: boolean;
  private fetchOptions: TFetchOptions;

  constructor(
    options: TFetchOptions,
    logs = false,
  ) {
    this.logs = logs;
    this.fetchOptions = options;
  }

  public async post<T>(url: string, data: object | object[], headers: object) {
    const response = await fetch(`${this.fetchOptions.baseURL}/${url}`, {
      method: "POST",
      headers: {
        ...this.fetchOptions.headers,
        ...headers,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error("Unauthorized");
      }
      if (response.status === 403) {
        throw new Error("Forbidden");
      }
      if (response.status === 429) {
        throw new Error(
          `You have exceeded the quota for Requests on your current plan. Upgrade your plan at ${Sdk.DEFAULT_CTA_URL}`,
        );
      }

      throw new Error(`Unexpected error: ${response.statusText}`);
    }

    return await response.json() as Promise<T>;
  }
}
export default HttpClientService;
