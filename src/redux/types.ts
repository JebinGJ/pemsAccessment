export interface GeoType {
    lat: string;
    lng: string;
}

export interface AddressType {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: GeoType;
}

export interface CompanyType {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface UserType {
    id: number;
    name: string;
    username: string;
    email: string;
    address: AddressType;
    phone: string;
    website: string;
    company: CompanyType;
}

export interface PostType {
    userId: number;
    id: number;
    title: string;
    body: string;
}