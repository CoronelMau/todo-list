export function validateEmail(email) {
  if (email.length > 10 && email.includes('@') && email.includes('.')) {
    return true;
  }
  return false;
}

export function validatePassword(password) {
  if (password.length > 8) {
    return true;
  }
  return false;
}
