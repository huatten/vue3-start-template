import { USER_STORE_KEY } from '@/const/constant'

const LOCAL_STORAGE_KEY = [USER_STORE_KEY]
const SESSION_STORAGE_KEY = []

// 清除缓存 localStorage
export const clearLocalstorage = () => {
  LOCAL_STORAGE_KEY.forEach((key) => localStorage.removeItem(key))
}

// 清除缓存 sessionStorage
export const clearSessionStorage = () => {
  SESSION_STORAGE_KEY.forEach((key) => sessionStorage.removeItem(key))
}

// 清除所有缓存
export const clearAllStorage = () => {
  clearLocalstorage()
  clearSessionStorage()
}
