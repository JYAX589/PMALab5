import { useState } from "react"
import './Chiste-style.css'

export const ChisteApp = () => {
    const [chiste, setChiste] = useState("")

    const fetchChiste = () => {
        try {
            fetch(`https://v2.jokeapi.dev/joke/Any?lang=es`).then((resp) => {
                resp.json().then((data) => {
                    const { joke, setup, delivery } = data
                    if (joke) {
                        setChiste(joke)
                    } else {
                        setChiste(`${setup} - ${delivery}`)
                    }
                })
            })
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className="container">
            <h1 className="title"> Generador de Chistes </h1>
            <div className="Caja">
                <p className="Texto">{chiste ? chiste : "Haz clic en el botón para obtener un chiste"}</p>
            </div>
            <button className="button" onClick={fetchChiste}> Generar Chiste </button>
        </div>
    )
}
