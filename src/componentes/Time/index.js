import './Time.css'
import Colaborador from "../Colaborador";

const Time = (props) => {

    //const css = {backgroundColor: props.corPrimaria}
    return (
        // se for verdade retornaa section
        (props.colaborador.length > 0) ? <section className='time' style={{backgroundColor: props.corSecundaria}}>
                <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>

                <div className="colaboradores">
                    {props.colaborador.map(colaborador => <Colaborador
                        corDeFundo={props.corPrimaria}
                        nome={colaborador.nome} key={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}/>)}
                </div>
            </section>
            : ''
    )
}

export default Time;