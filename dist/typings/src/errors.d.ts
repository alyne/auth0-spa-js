export declare class AuthenticationError extends Error {
  error: string;
  error_description: string;
  state: string;
  appState: any;
  constructor(
    error: string,
    error_description: string,
    state: string,
    appState?: any
  );
}
