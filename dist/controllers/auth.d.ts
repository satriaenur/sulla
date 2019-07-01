import * as puppeteer from 'puppeteer';
export declare const isAuthenticated: (waPage: puppeteer.Page) => Promise<boolean>;
export declare const needsToScan: (waPage: puppeteer.Page) => import("rxjs").Observable<boolean>;
export declare const isInsideChat: (waPage: puppeteer.Page) => import("rxjs").Observable<boolean>;
export declare function retrieveQR(waPage: puppeteer.Page): Promise<boolean>;
