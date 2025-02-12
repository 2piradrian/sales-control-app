import "../styles/global.css";

type Props = {
    children: React.ReactNode;
};

export default function Layout({ children }: Props) {
    return (
        <div className="container">
            <main>{children}</main>
        </div>
    );
}