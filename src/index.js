import Koa from 'koa'
import Router from 'koa-router'
import {koaBody} from 'koa-body'
import routers from "./routers/index.js";
// const Router = require("koa-router")
// const koaBody = require("koa-body")

const app = new Koa()

app.use(koaBody({
    multipart: true
}))


app.use(routers)


app.listen(3000,()=>{
    console.log("open server localhost:3000")
})
