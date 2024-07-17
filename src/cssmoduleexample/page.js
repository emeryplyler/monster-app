import Sidenote from "./cssmodule"
// import { Link } from "react-router-dom";
import Link from "next/link";

export function CSSModuleApp() {
    return (
        <div>
            <div style={{textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", padding: "4%"}}>
                <Sidenote type="notice" title="Notice">
                    This is a notice
                </Sidenote>

                <Sidenote type="warning" title="Warning">
                    This is a warning!
                </Sidenote>
            </div>
            

            <p>
                {/* <Link to='/'> Home Page </Link> */}
                <Link href="/">Home</Link>
            </p>
            
        </div>
    );
}
