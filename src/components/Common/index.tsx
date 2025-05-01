import * as S from "./styte"

interface TitleProps{
text:string;
}

const Title = ({text}:TitleProps) => {
  return (
    <S.Heading>{text}</S.Heading>
  )
}

export default Title