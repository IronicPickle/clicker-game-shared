export type ValidationErrors<K extends string | number | symbol> = {
  failed: boolean;
} & Partial<Record<K, string[]>>;

export type ApiError<K extends string | number | symbol> = {
  error: any;
  errorCode: any;
  validation: ValidationErrors<K>;
};
