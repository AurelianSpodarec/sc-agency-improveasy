import Footer from "@components/Footer";
import Header from "@components/header/Header";

function MainPortal({children}:any) {
    return (
        <div className="main-portal">
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default MainPortal;