import "./ImageCard.scss";
import { useModal } from "../../hooks/useModal";

type ImageCardType = {
    source: string;
    author: string;
};

export default function ImageCard({ source, author }: ImageCardType) {
    const { handleImageClicked } = useModal();
    return (
        <div className="image-card">
            <img src={source} alt={author} onClick={handleImageClicked} />
            <p>{author}</p>
        </div>
    );
}
