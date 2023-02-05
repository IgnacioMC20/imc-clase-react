import { NewtonsCradle } from '@uiball/loaders'
import { useState } from 'react'

function App() {

  const [imcForm, setImcForm] = useState({
    peso: 0,
    altura: 0, 
    imc: 0
  })

  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleOnChange = (event) => {
    setImcForm({
      ...imcForm,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = (obj) => {
    // e.preventDefault();
    setLoading(true)
    setTimeout(function () {
      setLoading(false)
      setDone(true)
      const valorIMC = calcular(obj)
      setImcForm({
        ...imcForm,
        imc: valorIMC
      })
    }, 2000);

    // ? tenes que usar setLoading(true) y un 'timer'
  }

  const calcular = ({peso, altura}) => (peso/(altura*altura))

  return (
    <div className="container">

      {
        done && (
          <div className="card bg-dark text-white">
            <div className="body">
              <h1>Tu IMC es: {Math.floor(imcForm.imc)}</h1>
            </div>
          </div>
        )
      }

      {
        done || loading || (
          // !loading && (
          <div className='card bg-dark text-white'>
            <div className="card-header">
              Indice de masa corporal React
            </div>
            <div className="card-body">
              {/* <form> */}
              <div className="mb-3">
                <label className="form-label">Peso</label>
                <input
                  type="peso"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name='peso'
                  value={imcForm.peso}
                  onChange={handleOnChange}
                />
                <div id="emailHelp" className="form-text">Introduce tu peso en Kilogramos</div>
              </div>
              <div className="mb-3">
                <label className="form-label">Altura</label>
                <input
                  type="altura"
                  className="form-control"
                  id="exampleInputPassword1"
                  name='altura'
                  value={imcForm.altura}
                  onChange={handleOnChange}
                />
                <div id="emailHelp" className="form-text">Introduce tu altura en metros</div>
              </div>
              <button onClick={() => handleSubmit(imcForm)} className="btn btn-primary">Calcular</button>
              {/* </form> */}
            </div>
          </div>
        )
      }

      {
        done || loading && (
          <NewtonsCradle
            size={40}
            speed={1.4}
            color="white"
          />
        )
      }

    </div>
  )
}

export default App
