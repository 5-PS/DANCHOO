const jwtDecode = (token: string) => {
  if (token) {
    const decodedJWT = JSON.parse(
      decodeURIComponent(
        window
          .atob(token)
          .split('')
          .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
          .join(''),
      ),
    );
    return decodedJWT.userId;
  }
  return null;
};
export default jwtDecode;
