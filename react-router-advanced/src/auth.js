export function isAuthenticated() {
  return localStorage.getItem('rra_auth') === 'true'
}

export function login() {
  localStorage.setItem('rra_auth', 'true')
}

export function logout() {
  localStorage.removeItem('rra_auth')
}
