/**
 * 用户信息模块
 * @type {StoreDefinition<"USER_INFO", {access_token: string, userInfo: null}, {}, {setUserInfo(*): void, setAccessToken(*): void, clearStore(): void}>}
 */
import { USER_STORE_KEY } from '@/const/constant'
export const useUserStore = defineStore(USER_STORE_KEY, {
  state() {
    return {
      userInfo: null,
      access_token: '',
    }
  },
  actions: {
    setUserInfo(userInfo) {
      this.userInfo = userInfo
    },
    setAccessToken(access_token) {
      this.access_token = access_token
    },
    clearStore() {
      this.$reset()
    },
  },
  persist: {
    storage: localStorage,
  },
})
