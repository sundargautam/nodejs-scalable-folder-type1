// Error type with status
export interface IError extends Error {
  status?: number;
  fieldname?: string;
}
