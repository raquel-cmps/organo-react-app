import './Time.css'
import Colaborador from "../Colaborador";
import hexToRgba from 'hex-to-rgba';

const Time = (props) => {

    //const css = {backgroundColor: props.corPrimaria}
    return (
        // se for verdade retorna section
        (props.colaborador.length > 0) ?
            <section className='time'
                style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(props.cor, '0.6') }}>
                <input
                    onChange={evento => props.mudarCor(evento.target.value, props.time.id)}
                    type='color'
                    className='input-color'
                    value={props.cor}
                />
                <h3 style={{ borderColor: props.cor }}>{props.nome}</h3>

                <div className="colaboradores">
                    {props.colaborador.map((colaborador, indice) => {
                        return (
                            <Colaborador
                                key={indice}
                                corDeFundo={props.cor}
                                colaborador={colaborador}
                                aoDeletar={props.aoDeletar}
                                aoFavoritar={props.aoFavoritar}
                            />)
                    })}
                </div>
            </section>
            : ''
    )
}

export default Time;