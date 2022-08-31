import { HTTPStatusCode } from '../shared/enums/statusCodes';
import { FieldErrorsObj } from './shared/fieldErrors';

export interface APIError {
    message: string;
    response: APIErrorResponse;
}

interface APIErrorResponse {
    status: HTTPStatusCode; // todo replace with status code
    data: string | { errors: FieldErrorsObj };
}
