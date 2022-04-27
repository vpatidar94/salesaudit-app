export interface MemoVo {
    id: string;
    memoId: string;
    
    tag: Array<string>;
    childSfid: string;
    name: string;
    note: string;

    date: Date;
}