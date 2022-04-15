function latterUpperCase(str) {
  return str.replace(/(?<=\b)[a-z](?=\w*)/g, (c) => c.toUpperCase());
}

module.exports = latterUpperCase;
