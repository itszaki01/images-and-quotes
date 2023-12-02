import React from "react";
import "./Modal.scss";
import ReactDOM from "react-dom";
import { GerRandomQuotes } from "../../types/GetRandomQuotes.type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { useClipboard } from "react-haiku";

type ModalProps = {
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    quot: GerRandomQuotes[];
};
export default function Modal({ showModal, setShowModal, quot }: ModalProps) {
    //ClipBoard Handle Copy
    const clipboard = useClipboard({ timeout: 2000 });

    //handleCopyIconClicked
    function handleCopyIconClicked() {
        clipboard.copy(quot[0].content)
        
        const Toast = Swal.mixin({
            toast: true,
            position: "bottom-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
        });
        Toast.fire({
            icon: "success",
            title: "Quot Copied To Clip-Board",
        });
    }
    return ReactDOM.createPortal(
        <div
            className="modal-container-overlay"
            onClick={() => setShowModal(false)}
            style={{ opacity: showModal ? "100%" : "0", zIndex: showModal ? "999" : "-999" }}
        >
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <FontAwesomeIcon icon={faCopy} className="copyclipboard-icon" onClick={handleCopyIconClicked} />
                <p>{quot[0]?.content}</p>
                <h5>Author: {quot[0]?.author}</h5>
                <button onClick={() => setShowModal(false)}>Close</button>
            </div>
        </div>,
        document.getElementById("modal") as HTMLDivElement
    );
}
