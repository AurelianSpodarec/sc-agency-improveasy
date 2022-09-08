import Footer from "@pages/public/_components/Footer";
import Header from "@pages/public/_components/Header";

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