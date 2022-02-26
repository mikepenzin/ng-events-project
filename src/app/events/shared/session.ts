export class Session {
    id: number | undefined;
    name: string | undefined;
    presenter: string | undefined;
    duration: number | 0 = 0;
    level!: string;
    abstract: string | undefined;
    voters: string[] = [];
}
