const decodeJWT = (token: string) => {
  const base64UrlToBase64 = (input: string) => {
    const replaced = input.replace(/-/g, '+').replace(/_/g, '/');

    switch (replaced.length % 4) {
      case 0:
        break;
      case 2:
        return `${replaced}==`;
      case 3:
        return `${replaced}=`;
      default:
        throw new Error('유효하지 않은 토큰입니다.');
    }

    return replaced;
  };

  const decodeBase64 = (base64: string) => Buffer.from(base64, 'base64').toString('utf8');

  const parts = token.split('.');
  if (parts.length !== 3) {
    throw new Error('유효하지 않은 토큰 구조입니다.');
  }

  const payload = parts[1];

  const decodedPayload = decodeBase64(base64UrlToBase64(payload));

  return JSON.parse(decodedPayload);
};

export default decodeJWT;
