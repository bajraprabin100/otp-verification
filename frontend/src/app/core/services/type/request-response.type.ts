export type Paginator = {
  page: number
  pageSize: number
  total: number
}
export type Response<I> = {
  httpStatus:string,
  success:boolean,
  code:string,
  data: I,
  paginator: Paginator
}

export type RequestGetParams = {
  pageSize?: number,
  page?: number,
  search?: string
}

// export type ErrorResponse = {
//   response: {
//     data: {
//       errors: {
//         message: string,
//       }[]
//     }
//   }
// }
export type ErrorResponse = {
  response: {
    data:{
    success: boolean,
    message: string,
    statusCode: number
    }
  }
}
