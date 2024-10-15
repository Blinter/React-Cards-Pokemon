function choice(values) {
  const randIdx = Math.floor(Math.random() * values.length);
  return values[randIdx];
}

export { choice };