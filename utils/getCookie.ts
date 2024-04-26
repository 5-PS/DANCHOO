export function getCookie(name: string) {
  const matches = document.cookie.match(
    // eslint-disable-next-line no-useless-escape
    new RegExp(`(?:^|; )${name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1')}=([^;]*)`),
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
export function decodeJWT(token: string) {
  const base64payload = token.split('.')[1];
  const payload = Buffer.from(base64payload, 'base64');
  const result = JSON.parse(payload.toString());
  return result.userId;
}
