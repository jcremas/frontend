const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="images/home/img01.jpg" alt="avion" />
            </div>
            <div className="columnas">
                <div className="bienvenidosleft">
                    <h2>Bienvenidos</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt.
                    </p>
                </div>
                <div className="testimonios right">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Excelente servicio</span>
                        <span className="autor">Bill Gates</span>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default HomePage;