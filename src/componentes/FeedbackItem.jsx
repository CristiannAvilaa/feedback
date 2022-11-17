import { useState } from "react"

const FeedbackItem = () =>{

    const [rating, setRating ] = useState(10) 
    const [text, setText] = useState("Mejorar Curso, Mejores Recursos")

    const addNota =() =>{
        //Cambiar estado a rating
        setRating((prev) =>{
            return prev + 1
        })
    }
    const restaNota =() =>{
        //Cambiar estado a rating
        setRating((prev) =>{
            return prev - 1
        })
    }
    return(
        <div className="card">
            <div className="num-display">
                { rating }
            </div>
            <div className="text-display">
                { text }
            </div>
            <button onClick={ addNota } className='btn' >
                Sumar nota
            </button>
            <br />
            <button onClick={ restaNota } className='btn:disabled:hover'>
                Restar nota
            </button>
        </div>
    )
}

export default FeedbackItem