export function generateUUID() {
  return Math.random().toString(36).substring(2) + new Date().getTime().toString(36);
}
