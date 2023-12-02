import axios, { Canceler } from "axios";
import { GerRandomQuotes } from "../types/GetRandomQuotes.type";

interface IQuotesApiCalls {
    getRandomQuotes(): Promise<GerRandomQuotes[]>;
}

class QuotesApiCalls implements IQuotesApiCalls {
    //Get random Photos Req -----------------------------------
    async getRandomQuotes(): Promise<GerRandomQuotes[]> {
        const { data } = await axios.get("https://api.quotable.io/quotes/random", {
            cancelToken: new axios.CancelToken((c) => (this.getRandomQuotesCleaner = c)),
        });
        return data;
    }
    //Cleaner
    getRandomQuotesCleaner: Canceler = () => {};
}

export const QuotesApiCall = new QuotesApiCalls();
