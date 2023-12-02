import "./App.scss";
import Container from "./components/Container/Container";
import ModalProvider from "./context/ModalContext";
function App() {
    return (
        <>
            <ModalProvider>
                <Container />
            </ModalProvider>
        </>
    );
}

export default App;
