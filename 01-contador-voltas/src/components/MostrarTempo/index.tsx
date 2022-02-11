import { Span, P} from './styles'

export const MostrarTempo = (props: any) =>{
    const tempo = props.tempo
    const minutos = Math.round(tempo/60)
    const segundos = tempo % 60
    const minutoStr = minutos < 10 ? '0' + minutos : minutos
    const segundosStr = segundos < 10 ? '0' + segundos : segundos
  
    return(
      <P><Span>{`${minutoStr}:${segundosStr}`}</Span><br/>
      Tempo médio por volta</P>
    )
  }