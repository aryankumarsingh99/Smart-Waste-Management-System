export function setUser(user) {
  if (typeof window !== "undefined") {
    localStorage.setItem("swm_user", JSON.stringify(user));
  }
}
export function getUser() {
  if (typeof window !== "undefined") {
    const user = localStorage.getItem("swm_user");
    if (user) return JSON.parse(user);
  }
  return null;
}
export function removeUser() {
  if (typeof window !== "undefined") {
    localStorage.removeItem("swm_user");
  }
}