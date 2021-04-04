// los componentes van en UpperCamelCase
// puede ser en clases o funciones
//FC = functional component
// <></> para que no se genere un div dentro de otro
// o podemos usar la palabra recervada <Fragment></Fragment>
import React from 'react'; 
import PropTypes from 'prop-types'
const PrimeraApp = ({saludo, subtitulo}) => {
    if(!saludo){
        throw new Error("Anda a la cancha BOBO!");
    }
    return (
        <>
            <h1>{saludo}</h1>
            <p>{subtitulo}</p>
        </>
    
    );
}
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired     
}
PrimeraApp.defaultProps = {
    saludo : 'Incha GORDO !!!',
    subtitulo : 'Vamos Newellss !!! '
}
export default PrimeraApp;