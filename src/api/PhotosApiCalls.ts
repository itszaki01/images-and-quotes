import axios, { Canceler } from "axios";
import { ApiResponseType } from "../types/ApiResponse.type";

interface IPhotoApiCalls {
    getRandomPhotos(): Promise<ApiResponseType[]>;
}

class PhotosApiCalls implements IPhotoApiCalls {
    //Get random Photos Req -----------------------------------
    async getRandomPhotos(): Promise<ApiResponseType[]> {
        const { data } = await axios.get("https://picsum.photos/v2/list?page=5", {
            cancelToken: new axios.CancelToken((c) => (this.getRandomPhotosCleaner = c)),
        });
        return data;
    }
    //Cleaner
    getRandomPhotosCleaner: Canceler = () => {};
}

export const PhotosApiCall = new PhotosApiCalls()