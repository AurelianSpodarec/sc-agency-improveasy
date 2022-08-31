export type HandleChange = <T>(name: string, value: T) => void;

export type ValidateConfirmPassword = (confirmPassword: string) => string | undefined;

export type CloseModal = () => void;

export type HandleSubmit = () => void;
