export interface Message {
    message: string;
    valid: number;
}

export interface User {
    id: number;
    name: string;
    email: string;
    old_password: string;
    password: string;
    confirm_password: string;
}

export interface UserState {
    user: User[];
    data: User;
    message: Message;
}
