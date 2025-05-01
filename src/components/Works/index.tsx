import Title from '../../components/Title'
import { CardProject } from './Components';
import { workData } from '../../WorkData/workdata';



import * as S from "./style";

export const Works  = () => {
  return (
      <S.Section id="Work">
        <Title text = "Trabalhos"/>
        <S.Projects>
        {workData.map((work)=> <CardProject image={work.image} links={work.links}/>)}

        {/* <CardProject 
        image={bike}
        links={[{
          icon:<GithubLogo size={25} />,
          text: "GitHub",
          url:"https://github.com/diegofchagas/bikcraft",
        },
      {
        icon: <GoogleChromeLogo size={25} />,
        text: "Website",
        url: "https://diegofchagas.github.io/bikcraft/",
      }]}
        /> */}
        </S.Projects>
      </S.Section>
  )
}
