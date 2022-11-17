import Header from "./componentes/Header";
import FeedbackItem from "./componentes/FeedbackItem";


function App(){

    const HeaderStyles = {
        backgroundColor: '#fff',
        color: 'black'
    }

    return(
        <div className="container">
            {/*Props: Atributos de etiqueta de un componentes react*/}
            <Header 
                bgColor={HeaderStyles.backgroundColor}
                color ={HeaderStyles.color}/>
            <FeedbackItem/>
            <FeedbackItem/>
        </div> 
    )
}

export default App;