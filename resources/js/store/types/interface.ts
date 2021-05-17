export interface Message {
    message: string;
    valid: number;
}

export interface Background {
    id: number;
    background: string;
}

export interface Accounts {
    id: number;
    brand: string;
    title: string;
    background: string;
    phone_numbers: string;
    address: string;
    list_background: Background[];
}

export interface Service {
    id: number;
    name: string;
    description: string;
    image: string;
}

export interface Album {
    id: number;
    title: string;
    caption: string;
    photo: string;
}

export interface Vision {
    id: number;
    title: string;
    image: string;
    caption: string;
}

export interface Testimonials {
    id: number;
    avatar: string;
    name: string;
    comment: string;
    from: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    old_password: string;
    confirm_password: string;
    accounts?: Accounts;
    service?: Service;
    vision?: Vision;
    testimonials?: Testimonials;
}

export interface UserState {
    user: User[];
    data: User;
    message: Message;
}

export interface ServiceState {
    service: Service[];
    data: Service;
}

export interface TestimonialsState {
    testimonials: Testimonials[];
    data: Testimonials;
}

export interface VisionState {
    vision: Vision[];
    data: Vision;
}

export interface AlbumState {
    album: Album[];
    data: Album;
}

export interface Update {
    id: number;
    args: FormData;
}
