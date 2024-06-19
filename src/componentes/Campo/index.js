import './Campo.css'

const Campo = ({ type = 'text', label, placeholder, valor, aoAlterado, obrigatorio }) => {

    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input
                type={type}
                required={obrigatorio}
                placeholder={placeholder}
                value={valor}
                onChange={aoDigitado}
            />
        </div>
    )
}

export default Campo