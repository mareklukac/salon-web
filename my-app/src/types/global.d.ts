declare module "*.css";

declare global {
  interface Window {
    dataLayer: any[];
    gtmLoaded?: boolean;
  }
}

export {};
