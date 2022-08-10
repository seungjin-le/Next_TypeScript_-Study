import axios from 'axios'


export const get = (data : string) => {
  return axios.get("https://dapi.kakao.com/v3/search/book?target=title", {
    params:{
      query:data,
      page:50,
      size:50
    },
    headers: {
      "Authorization": `KakaoAK c632ee2baf4d5a2bbfa3277ea498e550`
    },
  });;
}
