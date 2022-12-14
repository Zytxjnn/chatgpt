import Router from "koa-router";
import {OpenAIController} from "../controllers/openAIController.js";
import {ChatGPTController} from "../controllers/ChatGPTController.js";

const router = new Router()
router.post("/generateImage",async ctx => {
    const controller = new OpenAIController(ctx);
    return await controller.generateImage();
})
router.post("/conversation",async ctx => {
    const controller = new ChatGPTController(ctx);
    return await controller.conversation();
})



export default router.routes()
