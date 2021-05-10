export interface Message {
    message: string;
    valid: number;
}

export interface Accounts {
    id: number;
    brand: string;
    title: string;
    background: string;
    phone_numbers: string;
    address: string;
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
    old_password: string;
    password: string;
    confirm_password: string;
    accounts?: Accounts;
    service?: Service[];
    album?: Album[];
    vision?: Vision[];
    testimonials?: Testimonials[];
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

export interface VisionState {
    vision: Vision[];
    data: Vision;
}

export interface TestimonialsState {
    testimonials: Testimonials[];
    data: Testimonials;
}

export interface AlbumState {
    album: Album[];
    data: Album;
}
