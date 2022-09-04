export interface CommentItem {
    id: number;
    deleted?: boolean;
    type: string;
    by?: string;
    time?: number;
    dead?: boolean;
    kids?: number[];
    parent?: number;
    text?: string;
}