import { Toaster } from "react-hot-toast";
import Header from "../components/header/header";
import "../styles/global.css";

type Props = {
    children: React.ReactNode;
};

export default function Layout({ children }: Props) {
    return (
        <div className="container">
            <Header />
            <main>{children}</main>
            <Toaster 
                position="bottom-left"
                toastOptions={
                    {
                        duration: 7000
                    }
                }
            />
        </div>
    );
}