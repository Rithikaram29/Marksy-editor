const marked = require('marked');
import sanitizeHtml from "sanitize-html";

export const markdownConverter = (markdownData: string)=>{
    try {
        const html = marked.parse(markdownData);
        const cleanHtml = sanitizeHtml(html, {
            allowedTags: sanitizeHtml.defaults.allowedTags.concat([ 'img' ]),
            allowedAttributes: {
              ...sanitizeHtml.defaults.allowedAttributes,
              img: ['src', 'alt'],
            },
          });
        if(html){
            return {
                data: cleanHtml,
                status: "SUCCESS"
            }
        } 
    } catch (error) {
        return {
            data: error,
            status: "ERROR"
        }
    }
}