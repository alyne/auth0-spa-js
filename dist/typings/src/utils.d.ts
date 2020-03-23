export declare const getUniqueScopes: (...scopes: string[]) => any;
export declare const parseQueryResult: (
  queryString: string
) => AuthenticationResult;
export declare const runIframe: (
  authorizeUrl: string,
  eventOrigin: string,
  timeoutInSeconds?: number
) => Promise<AuthenticationResult>;
export declare const runPopup: (
  authorizeUrl: string,
  config: PopupConfigOptions
) => Promise<AuthenticationResult>;
export declare const createRandomString: () => string;
export declare const encodeState: (state: string) => string;
export declare const decodeState: (state: string) => string;
export declare const createQueryParams: (params: any) => string;
export declare const sha256: (s: string) => Promise<any>;
export declare const urlDecodeB64: (input: string) => string;
export declare const bufferToBase64UrlEncoded: (input: any) => string;
export declare const oauthToken: ({
  baseUrl,
  ...options
}: OAuthTokenOptions) => Promise<any>;
export declare const getCrypto: () => Crypto;
export declare const getCryptoSubtle: () => any;
export declare const validateCrypto: () => void;
