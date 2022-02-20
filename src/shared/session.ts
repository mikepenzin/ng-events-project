export class Session {
    id: number | 999 = 999;
    name: string | undefined;
    presenter: string | undefined;
    duration: number | 0 = 0;
    level!: string;
    abstract: string | undefined;
    voters: string[] | undefined;
}
