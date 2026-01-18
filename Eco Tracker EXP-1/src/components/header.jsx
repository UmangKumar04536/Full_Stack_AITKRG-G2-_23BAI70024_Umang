const Header = ({ title }) => {
    return (
        <header style= {{
            padding:"1rem",
            backgroundColor:"#27ae60",
            color:"white",
            textAlign:"center",
        }}>
        <h2>{title}</h2>
        </header>
    );
};

export default Header;