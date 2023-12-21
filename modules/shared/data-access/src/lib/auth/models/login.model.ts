export interface LoginRequest {
    email: string;
    password: string;
    rememberMe: boolean;
}

export interface LoginResponse {
    id: string;
    email: string;
    accessToken: string;
}

