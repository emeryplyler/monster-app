import Sidenote from "./cssmodule"

function App() {
    return (
        <>
            <Sidenote type="notice" title="Notice">
                This is a notice
            </Sidenote>

            <Sidenote type="warning" title="Warning">
                This is a warning!
            </Sidenote>
        </>
    );
}
