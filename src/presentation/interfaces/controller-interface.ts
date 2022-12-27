export type HttpResponse ={
    statusCode: number
    data:any
}
export type HttpRequest ={
    body:any
}
export interface Controller{
    handle<R>(request:HttpRequest):Promise<HttpResponse>
}

export namespace Controller{
    export type Input = HttpRequest
    export type Output = HttpResponse

}
