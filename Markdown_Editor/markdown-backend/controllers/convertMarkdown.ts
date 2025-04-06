import { Request, Response } from "express";
import { markdownConverter } from "../utils/markdownConverter";
const NodeCache = require("node-cache");
const crypto = require("crypto");


export const markdownHandler = async (req: Request, res: Response)=>{
    const reqString: string = req.body.markdown;
    const hashedString = crypto.createHash("sha256").update(reqString).digest("hex");

     console.log(req, "request_sent here")

    const markdownCache = new NodeCache({stdTTL: 360})
    if(markdownCache.has(hashedString)){
        console.log("getting data from cache");
        const resData = {
            data: markdownCache.get(reqString),
            status: "SUCCESS",
            msd:"Returning data from cache"
        }

        res.status(200).json(resData);
    }else{
        const reqString: string = req.body.markdown;
        const markdownRes = markdownConverter(reqString);

        if(markdownRes?.status === "ERROR"){
            console.log("error while converting markdown");
            res.json({
                data: "",
                status: "ERROR",
                msd:"error while converting markdown"
            })
        }
        if(markdownRes?.status === "SUCCESS"){
            const convertedData = markdownRes.data;
            const cacheResponse = markdownCache.set(hashedString,convertedData);
            if(cacheResponse){
                res.json({
                    data: convertedData,
                status: "SUCCESS",
                msd:"Converted HTML"
                })
            }else{
                res.json({
                    data: convertedData,
                    status: "SUCCESS",
                    msd:"Converted to HTML, but not saved in cache!!!"
                })
            }
        }
    }
}