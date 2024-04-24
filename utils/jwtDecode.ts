const jwtDecode = () => {
  const tokenPayload = document.cookie.split('.')[1];
  if (tokenPayload) {
    const decodedJWT = JSON.parse(
      decodeURIComponent(
        window
          .atob(tokenPayload)
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
