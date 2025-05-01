import { useState, useEffect } from 'react';
import { LinkedinLogo, InstagramLogo,GithubLogo,ArrowUp } from "@phosphor-icons/react"
import { animateScroll as scroll } from 'react-scroll';
import * as S from "./style"



export const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);


  const scrollToTop = () => {
    scroll.scrollToTop({duration:200});
  };

  useEffect(()=>{
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 760){
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 760){
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  },[showScroll])

  return (
    <S.Footer>
      <span>Diego Chagas</span>
      <S.SocialLinks>
        <a href="https://www.linkedin.com/in/diego-fernandes-chagas/" className="link-icon">
          <LinkedinLogo size="32" weight="fill"/>
        </a>
        <a href="https://www.instagram.com/diegochagas.dev/" className="link-icon">
        <InstagramLogo size="32" weight="fill"/>
        </a>
        <a href="https://github.com/diegofchagas" className="link-icon">
        <GithubLogo size="32" weight="fill"/>
        </a>
      </S.SocialLinks>
      <p>&#169; 2022 copyright all right reserved</p>
      {showScroll && <ArrowUp size="32" weight="fill" className={ showScroll && 'show-scroll'} onClick={scrollToTop} style={{cursor: "pointer"}}/>}
    </S.Footer>
    
  
  )
}
