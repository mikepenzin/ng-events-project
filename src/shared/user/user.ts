export class User {
    id: number = 999;
    name: string = "";
    lastName: string = "";
    login: string = "";

    constructor (id: number, name: string, lastName: string, login: string) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.login = login;
    }

    getFullName(): string {
        return this.name + " " + this.lastName;
    }
}
