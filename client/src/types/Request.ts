export type SignUpRequest = {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    confirmPassword: string;
    address: string;
};

export type LoginRequest = {
    email: string,
    password: string
}