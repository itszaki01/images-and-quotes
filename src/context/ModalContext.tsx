import { ReactNode, createContext, useState } from "react";
import Modal from "../components/Modal/Modal";
import { GerRandomQuotes } from "../types/GetRandomQuotes.type";
import { QuotesApiCall } from "../api/QuotesApiCalls";

//-------------
type ModalContextProps = {
    handleImageClicked(): void;
};
export const ModalContext = createContext<ModalContextProps>({} as ModalContextProps);

//-----------
type ModalProviderProps = {
    children: ReactNode;
};
export default function ModalProvider({ children }: ModalProviderProps) {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [quot, setQuot] = useState<GerRandomQuotes[]>([] as GerRandomQuotes[]);

    //handleImageClicked
    async function handleImageClicked() {
        try {
            const data = await QuotesApiCall.getRandomQuotes();
            setQuot(data);
            setShowModal(true);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ModalContext.Provider value={{ handleImageClicked }}>
            <Modal showModal={showModal} setShowModal={setShowModal} quot={quot} />
            {children}
        </ModalContext.Provider>
    );
}
