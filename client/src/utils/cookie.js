function getCookies() {
  const cookies = Object.fromEntries(
    document.cookie.split("; ").map((v) => v.split("=").map(decodeURIComponent))
  );
  return cookies;
}

export default getCookies;
