import propTypes from "prop-types";


const Header = (bgColor, color) => {

    //Objeto de estilos
    //const HeaderStyles = {
    //      backgroundColor: '#49c9e',
    //      color: 'silver'
    // }

    return(
        <header style={{ backgroundColor: bgColor,
                        color: color}}>
            Encabezado
        </header>
    )
}

Header.defaultProps = {
    bgColor: 'rbga(0,0,0,0.4)',
    color:  '#ff6a95'
}

// Validar las props  con PropTypes

Header.propTypes = {
    bgColor: propTypes.string.isRequired,
    color: propTypes.string
}

export default Header;