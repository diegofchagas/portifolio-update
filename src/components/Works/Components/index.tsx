import {ReactNode} from 'react'
import * as S from "./style";

interface Link {
  icon:ReactNode;
  text: string;
  url:string;
}

interface CardProjectProps{
  image: string;
  links: Link [];
  imageAlt?:string;
}

export const CardProject = ({image,links,imageAlt}:CardProjectProps) => {
  return (
    <S.CardProjects>
      <img src={image} alt={imageAlt}/>
      <S.LinkContainer>
      {
        links.map((link)=> <a
        className='link'
        href={link.url} 
        target='_blank'
        rel='noopener noreferrer'
        >
          {link.icon}
          {link.text}
        </a>)
      }
      </S.LinkContainer>
    </S.CardProjects>
  )
}

