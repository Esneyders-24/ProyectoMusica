
import logo from '../img/Veloria.png'

const MainNavbar = () => {
    return (
        <nav style={styles.nav}>
            <div>
                <img
                    src={logo}
                    alt="logo"
                    style={{ width: "80px" }}
                />
            </div>

            <ul style={styles.menu} className='Secciones'>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>

        </nav>
    )
}

const styles = {
    nav: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        background: "transparent",
        position: "absolute" as const,
        width: "100%",
        top: 0,
        left: 0,
        zIndex: 10
    },
    menu: {
        display: "flex",
        listStyle: "none",
        gap: "60px",
        color: "#fff"

    }

};

export default MainNavbar