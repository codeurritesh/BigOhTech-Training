import { Quote } from "../../dataTypes/Quote"

export const addQuote=(quote:Quote)=>{
    return {
        type:"addQuote",
        payLoad:quote
    }
}
export const removeQuote=(quoteId:number)=>{
    return {
        type:"removeQuote",
        payLoad:quoteId
    }
}