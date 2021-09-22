import { atom } from 'recoil';

export interface TodoItemType {
    id : number;
    content : string;
}

export interface TodoListType {
    date : Date;
    item : TodoItemType[];
}

export const todoListArray = atom<TodoListType>({
    key: "todoListArray",
    default: { date : new Date(), item : []}
})
