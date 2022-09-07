import Footer from "@components/Footer";
import Header from "@components/header/Header";

function MainPublic({children}:any) {
    return (
        <div className="main-public">
            <Header />
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default MainPublic;