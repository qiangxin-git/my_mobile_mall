import {request} from "./requset";

export function getHomeMultiData()
{
  return request({
    url: "/home/multidata"
  })
}
