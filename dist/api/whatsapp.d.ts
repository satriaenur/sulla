import { Page } from 'puppeteer';
import { Chat } from './model/chat';
import { Contact } from './model/contact';
import { Message } from './model/message';
import { Id } from './model/id';
export declare class Whatsapp {
    page: Page;
    constructor(page: Page);
    onMessage(fn: (message: Message) => void): void;
    sendText(to: string, content: string): Promise<void>;
    sendMsg(to: string, content: string): Promise<void>;
    sendContact(to: string, contactId: string | string[]): Promise<any>;
    getAllContacts(): Promise<Contact[]>;
    getAllChats(withNewMessageOnly?: boolean): Promise<Chat[]>;
    getAllGroups(withNewMessagesOnly?: boolean): Promise<Chat[]>;
    getGroupMembersId(groupId: string): Promise<Id[]>;
    getGroupMembers(groupId: string): Promise<Contact[]>;
    getContact(contactId: string): Promise<Contact>;
}
