import puppeteer from 'puppeteer';
export declare function initWhatsapp(): Promise<puppeteer.Page>;
export declare function injectApi(page: puppeteer.Page): Promise<puppeteer.Page>;
