declare interface NodeRequire {
  context(
    directory: string,
    useSubdirectories?: boolean,
    regExp?: RegExp
  ): __WebpackModuleApi.RequireContext;
}

declare namespace __WebpackModuleApi {
  interface RequireContext {
    keys(): string[];
    <T>(id: string): T;
  }
}
