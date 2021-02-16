export class User {
    _id: string;
    name: string;
    username: string;
    email: string;
    phone: string;
    password: string;
    image: string;
    role: string;
    addedBy: string;


    constructor(details: any) {
        this.name = details.name || "";
        this.username = details.username || "";
        this.email = details.email || "";
        this.phone = details.phone || "";
        this.password = details.password || "1234";
        this.image = details.image || "";
        this.role = details.role || "2";
        this.addedBy = details.addedBy || "";
    }
}


