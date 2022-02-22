export class User {
    id: number = 999;
    name: string = "";
    lastName: string = "";
    login: string = "";
    password: string = ""

    constructor (id: number, name: string, lastName: string, login: string, password: string) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.login = login;
        this.password = password;
    }

    getFullName(): string {
        return this.name + " " + this.lastName;
    }
}
