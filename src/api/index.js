import request from '@/utils/request'

export function captcha(data) {
  return request({
    url: '/au/code',
    method: 'post',
    data
  })
}

export function login(data) {
  return request({
    url: '/au/login',
    method: 'post',
    data
  })
}