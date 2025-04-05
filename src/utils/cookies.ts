export const getCookies = (): Record<string, string> =>
  document.cookie.split("; ").reduce((acc: Record<string, string>, cookie) => {
    const [name, value] = cookie.split("=");
    if (name && value) acc[name] = decodeURIComponent(value);
    return acc;
  }, {});

export const setRedirectCookie = (name: string, value: string, days = 1) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000); // 만료일 계산
  document.cookie = `${name}=${encodeURIComponent(
    value
  )}; expires=${expires.toUTCString()}; path=/`;
};

export const deleteCookie = (name: string) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
};
