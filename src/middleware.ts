import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(({request}, next) =>{
    const url = new URL(request.url);

    if(url.pathname ==='/'){
        const langHeader = request.headers.get('accept-language')?? '';
        const prefersEnglish = langHeader.startsWith('en');

        url.pathname = prefersEnglish ? '/en' : '/es';
        return Response.redirect(url.toString(),302);
    }
    return next();
});