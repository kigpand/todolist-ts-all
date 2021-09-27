import { atom } from 'recoil';

export interface TodoItemType {
    id : number;
    userId: string;
    content : string;
}

export interface TodoListType {
    date : Date;
    item : TodoItemType[];
}

interface UserInfo {
    id : string;
    nick : string;
}

export const todoListArray = atom<TodoListType>({
    key: "todoListArray",
    default: { date : new Date(""), item : []}
})

export const listDate = atom<string>({
    key: "listDate",
    default: `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`
})

export const userInfo = atom<UserInfo>({
    key: "userInfo",
    default: { id: "", nick: ""}
})