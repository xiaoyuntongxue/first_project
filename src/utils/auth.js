import Cookies from 'js-cookie'

// const Token = ''

// 获取Token
export function getToken() {
  return Cookies.get('Token')
}

// 设置Token
export function setToken(token) {
  return Cookies.set('Token', token)
}

// 移除Token
export function removeToken() {
  return Cookies.remove('Token')
}