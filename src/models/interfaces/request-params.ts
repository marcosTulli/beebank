interface BaseRequestParams {
  location?: string;
  params?: Record<string, unknown>;
  headers?: Record<string, string>;
}

export type DeleteRequestParams = BaseRequestParams;

export interface GetRequestParams extends BaseRequestParams {
  url: string;
}

export interface PostRequestParams extends BaseRequestParams {
  body: unknown;
}

export interface PatchRequestParams extends BaseRequestParams {
  body: unknown;
  params?: Record<string, unknown>;
}
