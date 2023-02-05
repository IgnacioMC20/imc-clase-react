
export const Resultado = ({imcForm}) => {
  return (
    <>
        <div className="card bg-dark text-white">
            <div className="body">
              <h1>Tu IMC es: {Math.floor(imcForm.imc)}</h1>
            </div>
          </div>
    </>
  )
}
