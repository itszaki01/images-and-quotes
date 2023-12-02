import { PhotosApiCall } from "../api/PhotosApiCalls";
import { ApiResponseType } from "../types/ApiResponse.type";
import { useEffect, useState } from "react";

type usePhotosReturn = {
    photosData: ApiResponseType[];
    isLoading: boolean;
};
export default function usePhotos(): usePhotosReturn {
    const [photosData, setPhotosData] = useState<ApiResponseType[]>([] as ApiResponseType[]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    //Api side Eeffect
    useEffect(() => {
        (async () => {
            try {
                const data = await PhotosApiCall.getRandomPhotos();
                setPhotosData(data);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        })();

        return () => {
            PhotosApiCall.getRandomPhotosCleaner();
        };
    }, []);

    return {
        photosData,
        isLoading,
    };
}
