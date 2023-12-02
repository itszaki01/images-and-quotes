import usePhotos from "../../hooks/usePhotos";
import ImageCard from "../ImageCard/ImageCard";
import "./Container.scss";
import { SpinnerCircularFixed } from "spinners-react";

export default function Container() {
    const { isLoading, photosData } = usePhotos();
    return (
        <div className="container">
            <h2>Random 30 Photos & Quotes</h2>
            {isLoading && (
                <SpinnerCircularFixed
                    size={50}
                    thickness={100}
                    speed={142}
                    color="white"
                    className="spin-loader"
                    secondaryColor="rgba(172, 59, 57, 0)"
                />
            )}
            <div className="images-wraper">
                {!isLoading &&
                    photosData.map((image) => {
                        return <ImageCard key={image.id} source={image.download_url} author={image.author} />;
                    })}
            </div>
        </div>
    );
}
