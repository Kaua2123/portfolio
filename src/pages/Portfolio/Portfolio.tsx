import { useEffect, useRef, useState } from 'react';

import {
  AboutMe,
  AboutMeSection,
  ButtonIcon,
  ButtonReturnToTop,
  ContactMeSection,
  Div,
  DivContactMe,
  GridMyServices,
  H1,
  HeroSection,
  MainDiv,
  Marquee,
  Project,
  ProjectCard,
  ProjectInfo,
  ProjectsSection,
  SocialDiv,
  StackDiv,
} from './styled';

import {
  FileText,
  Linkedin,
  Github,
  Mail,
  ArrowUp,
  Monitor,
  Database,
  Settings2,
} from 'lucide-react';

import Navbar from '../../components/Navbar/Navbar';

import javascriptLogo from '../../assets/logo-javascript.svg';
import typescriptLogo from '../../assets/logo-typescript.svg';
import reactLogo from '../../assets/logo-react.svg';
import nodejsLogo from '../../assets/logo-nodejs.svg';
import nestjsLogo from '../../assets/logo-nestjs.svg';
import expressLogo from '../../assets/logo-express.svg';
import mysqlLogo from '../../assets/logo-mysql.svg';
import dockerLogo from '../../assets/logo-docker.svg';
import curriculo from '../../assets/curriculo.pdf';
import chathubPreview from '../../assets/chathub_preview.png';
import socialblogHome from '../../assets/socialblog-home.jpg';

export default function Portfolio() {
  const [isCopied, setIsCopied] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const projectsRef = useRef(null);

  // LÓGICA DE SCROLL DRIVEN ANIMATION
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsAnimated(true);
      }
    });

    if (projectsRef.current) observer.observe(projectsRef.current);

    return () => {
      if (projectsRef.current) observer.unobserve(projectsRef.current);
    };
  }, []);

  const copyEmail = () => {
    navigator.clipboard
      .writeText('kauapaixao37@gmail.com')
      .then(() => {
        setIsCopied(true);
      })
      .catch((error) => {
        console.log(error);
      });

    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <div>
      <Navbar />
      <a href="#">
        <ButtonReturnToTop title="Retornar para o topo">
          <ArrowUp />
        </ButtonReturnToTop>
      </a>

      <Div>
        <div className="gradient">
          <MainDiv className="section">
            <HeroSection>
              <div style={{ lineHeight: '1' }}>
                <p>Olá! 👋 Me chamo Kauã e sou</p>
                <H1>
                  FULLSTACK
                  <br /> DEVELOPER
                </H1>
              </div>
              <AboutMe>
                <p className="about-me-paragraph">
                  Sou um desenvolvedor fullstack empenhado em trazer
                  <br /> soluções robustas e inovadoras com interfaces limpas
                  <br /> e intuitivas.
                </p>
              </AboutMe>
            </HeroSection>
            <SocialDiv>
              <a
                href={curriculo}
                title="Baixar currículo"
                download={'curriculo.pdf'}
              >
                <ButtonIcon>
                  <FileText size={'4rem'} />
                </ButtonIcon>
              </a>

              <a
                title="Visitar meu LinkedIn"
                href="https://www.linkedin.com/in/kaua-paixao/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ButtonIcon>
                  <Linkedin size={'4rem'} />
                </ButtonIcon>
              </a>

              <a
                title="Visitar meu Github"
                href="https://github.com/Kaua2123"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ButtonIcon>
                  <Github size={'4rem'} />
                </ButtonIcon>
              </a>
            </SocialDiv>
          </MainDiv>

          <StackDiv>
            <Marquee>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={javascriptLogo} alt="" />
                <img src={typescriptLogo} alt="" />
                <img src={reactLogo} alt="" />
                <img src={nodejsLogo} alt="" />
                <img src={nestjsLogo} alt="" />
                <img src={expressLogo} alt="" />
                <img src={mysqlLogo} alt="" />
                <img src={dockerLogo} alt="" />
              </div>
            </Marquee>
            <Marquee>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={javascriptLogo} alt="" />
                <img src={typescriptLogo} alt="" />
                <img src={reactLogo} alt="" />
                <img src={nodejsLogo} alt="" />
                <img src={nestjsLogo} alt="" />
                <img src={expressLogo} alt="" />
                <img src={mysqlLogo} alt="" />
                <img src={dockerLogo} alt="" />
              </div>
            </Marquee>
          </StackDiv>
        </div>

        <ProjectsSection
          isAnimated={isAnimated}
          ref={projectsRef}
          className="section"
          id="projects"
        >
          <H1>PROJETOS</H1>
          <div
            style={{ display: 'flex', flexFlow: 'column nowrap', gap: '20rem' }}
          >
            <Project>
              <ProjectCard>
                <img src={chathubPreview} alt="" />
              </ProjectCard>
              <ProjectInfo>
                <h2>Chathub</h2>
                <h6>Aplicação de bate papo em tempo real</h6>

                <div
                  style={{ display: 'flex', gap: '2rem', marginTop: '5rem' }}
                >
                  <a
                    href="https://github.com/Kaua2123/chathub-client"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <button className="button-one">REPOSITÓRIO</button>
                  </a>
                  <a
                    href="https://chathub-client.vercel.app/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <button className="button-one">VISITAR</button>
                  </a>
                </div>
              </ProjectInfo>
            </Project>

            <Project>
              <ProjectInfo>
                <h2>Social Blog</h2>
                <h6>Aplicação de blog / rede social </h6>

                <div
                  style={{ display: 'flex', gap: '2rem', marginTop: '5rem' }}
                >
                  <a
                    href="https://github.com/Kaua2123/social-blog"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <button className="button-one">REPOSITÓRIO</button>
                  </a>

                  <a
                    href="https://social-blog-theta.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="button-one">VISITAR</button>
                  </a>
                </div>
              </ProjectInfo>
              <ProjectCard>
                <img src={socialblogHome} alt="" />
              </ProjectCard>
            </Project>
          </div>
        </ProjectsSection>

        <AboutMeSection className="section" id="about-me">
          <H1>SOBRE MIM</H1>

          <div className="text">
            <p>
              Oi! Me chamo Kauã Paixão e estou imerso no mundo de
              desenvolvimento há 3 anos, época em que ainda cursava o ensino
              médio técnico integrado em informática. Me formei recentemente, em
              dezembro de 2023, no entanto, ainda não tive minha primeira
              experiência profissional e, por isso, busco me preparar ao máximo
              possível para minha primeira oportunidade, estudando e
              desenvolvendo projetos pessoais práticos por fora, como
              freelancer. E aí? Vamos nos conectar?
            </p>
          </div>

          <div className="my-services">
            <h2>Serviços oferecidos</h2>

            <GridMyServices>
              <div>
                <Monitor color="white" size={100} />
                <p className="service-name">Desenvolvimento Front-end</p>
                <p className="service-description">
                  Criação de interfaces de usuário responsivas e intuitivas
                  utilizando React.js e Styled Components.
                </p>
              </div>
              <div>
                <Database color="white" size={100} />
                <p className="service-name">Desenvolvimento Back-end</p>
                <p className="service-description">
                  Construção de APIs REST com Node.js, Express.js, e NestJS.
                </p>
              </div>
              <div>
                <Settings2 color="white" size={100} />
                <p className="service-name">DevOps</p>
                <p className="service-description">
                  Configuração de ambientes de desenvolvimento com Docker e
                  Docker Compose.
                </p>
              </div>
            </GridMyServices>
          </div>
        </AboutMeSection>

        <ContactMeSection>
          <div
            style={{
              display: 'flex',
              padding: '5rem',
            }}
          >
            <DivContactMe>
              <div className="text-div">
                <Mail size={80} color="white" />
                <h2>Fale comigo!</h2>
              </div>
              <div className="copy-email-div">
                <div className="email">kauapaixao37@gmail.com</div>
                <button className="button-one button-copy" onClick={copyEmail}>
                  {isCopied ? 'EMAIL COPIADO' : 'COPIAR EMAIL'}
                </button>
              </div>
            </DivContactMe>
          </div>
        </ContactMeSection>
      </Div>
    </div>
  );
}
