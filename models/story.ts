export interface Story {
    id: number;
    deleted?: boolean;
    type: string;
    by?: string;
    time?: number;
    dead?: boolean;
    kids?: number[];
    descendants?: number;
    score?: number;
    title?: string;
    url?: string;
}