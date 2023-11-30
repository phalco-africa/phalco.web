export interface Login {
    id: string;
    email: string;
    accessToken: string;
}

export interface BaseResponse<T> {
    success: boolean;
    status: number;
    data?: T;
    message: string;
}