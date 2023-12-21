export class Response<T> {
    success!: boolean;
    status!: number;
    data?: T;
    message!: string;
}