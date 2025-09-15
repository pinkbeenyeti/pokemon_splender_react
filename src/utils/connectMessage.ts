export const connectErrorMessage = (
  code: number,
  message: string,
  detail: string
): string => {
  return `code: ${code}\nmessage: ${message}\ndetail: ${detail}`;
};
