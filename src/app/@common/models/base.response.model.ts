export interface BaseResponse<T> {
    success: boolean;
    status: number;
    data?: T;
    message: string;
}