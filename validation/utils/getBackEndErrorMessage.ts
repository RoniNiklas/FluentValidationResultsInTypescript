import { FluentValidationError, NestedKeyOf } from "../models/validationResult";

export default function getBackendErrorMessage<T extends object>(result: FluentValidationError<T>, key: NestedKeyOf<T>): string[] {
    return result[key]
}