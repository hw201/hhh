
import { request1 } from "./request";


export function getdetail() {
  return request1({
    url: '/getImageById',
    // params: {
    //   id
    // }
  })
}


// export function gethomegoods(type) {
//   return request1({
//     url: '/getImages',
//     // params: {

//     //   type,
//     //   pageIndex,
//     //   pageSize

//     // }
//   })
// }
