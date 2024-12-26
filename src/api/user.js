/**
 * 用户信息模块
 */
import api_prefix from './api_prefix'
import request from './fetch'

// 学科信息获取
export function getSubjectInfo() {
  return request(api_prefix.user.getSubjectInfo, {
    method: 'GET',
  })
}
