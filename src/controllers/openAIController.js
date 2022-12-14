import {Configuration, OpenAIApi} from "openai";

export class OpenAIController {
    config;
    openAI;
    ctx;

    constructor(ctx) {
        this.config = new Configuration({
            apiKey: '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'
        })
        this.openAI = new OpenAIApi(this.config);
        this.ctx = ctx;
    }

    async generateImage() {
        const { prompt, } = this.ctx.request.body;

        const { data } = await this.openAI.createImage({
            n:1,
            prompt,
            size: '256x256'
        });

        const imageUrl = data.data[0].url;

        ctx.body = {
            code: 200,
            status: 'success',
            data: imageUrl
        }
    }
}
