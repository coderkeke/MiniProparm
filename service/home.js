import request from "./network.js"
import {
  baseURL
} from "./config.js"





export function getMultiData() {
  return request({
    url: baseURL + "/home/multidata",
  })
}

export function getGoodsData(data) {
  return request({
    url: baseURL + "/home/data",
    data
  })
}
