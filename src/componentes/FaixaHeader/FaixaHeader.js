import './FaixaHeader.css'

const FaixaHeader = (props) => {
    return (
        <div className='faixa-header'>
            <p className="texto1" >Clima e Previsão do Tempo / Cidade / Previsão do tempo amanhã / {props.cidade} - {props.estado}</p>
            <p className="texto2" >{props.cidade} - {props.estado} / {props.graus}º</p>
        </div>

    )
}

export default FaixaHeader

