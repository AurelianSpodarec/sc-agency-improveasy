import Header from "./Header";

function MainPortal({children}:any) {
    return (
        <div className="main-portal">
            <Header />
            <main>
                {children}
            </main>
        </div>
    )
}

export default MainPortal;