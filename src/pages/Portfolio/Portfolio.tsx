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
  ProjectsDiv,
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
import socialblogHomeMobile from '../../assets/socialblog-home-mobile.jpg';
import chathubHomeMobile from '../../assets/chathub-home-mobile.jpg';

export default function Portfolio() {
  const [isCopied, setIsCopied] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const [isGridsAnimated, setIsGridsAnimated] = useState(false);
  const [isDivAnimated, setIsDivAnimated] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const projectsRef = useRef(null);
  const gridsRef = useRef(null);
  const divTextRef = useRef(null);
  const EMAIL = 'kauapaixao37@gmail.com';

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // LÓGICA DE SCROLL DRIVEN ANIMATION
  useEffect(() => {
    const projectsObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsAnimated(true);
      }
    });

    const gridsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsGridsAnimated(true);
      },
      { threshold: 0.2 },
    );

    const divObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsDivAnimated(true);
      },
      {
        threshold: 0.2,
      },
    );

    if (projectsRef.current) projectsObserver.observe(projectsRef.current);
    if (gridsRef.current) gridsObserver.observe(gridsRef.current);
    if (divTextRef.current) divObserver.observe(divTextRef.current);

    return () => {
      if (projectsRef.current) projectsObserver.unobserve(projectsRef.current);
      if (gridsRef.current) gridsObserver.unobserve(gridsRef.current);
      if (divTextRef.current) gridsObserver.unobserve(divTextRef.current);
    };
  }, []);

  const copyEmail = () => {
    navigator.clipboard
      .writeText(EMAIL)
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
      <Navbar isMobile={isMobile} />
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
                <p className="hi-paragraph">Olá! 👋 Me chamo Kauã e sou</p>
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
                <img src={javascriptLogo} alt="" loading="lazy" />
                <img src={typescriptLogo} alt="" loading="lazy" />
                <img src={reactLogo} alt="" loading="lazy" />
                <img src={nodejsLogo} alt="" loading="lazy" />
                <img src={nestjsLogo} alt="" loading="lazy" />
                <img src={expressLogo} alt="" loading="lazy" />
                <img src={mysqlLogo} alt="" loading="lazy" />
                <img src={dockerLogo} alt="" loading="lazy" />
              </div>
            </Marquee>
            <Marquee>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={javascriptLogo} alt="" loading="lazy" />
                <img src={typescriptLogo} alt="" loading="lazy" />
                <img src={reactLogo} alt="" loading="lazy" />
                <img src={nodejsLogo} alt="" loading="lazy" />
                <img src={nestjsLogo} alt="" loading="lazy" />
                <img src={expressLogo} alt="" loading="lazy" />
                <img src={mysqlLogo} alt="" loading="lazy" />
                <img src={dockerLogo} alt="" loading="lazy" />
              </div>
            </Marquee>
          </StackDiv>
        </div>

        <ProjectsSection
          ref={projectsRef}
          $isAnimated={isAnimated}
          className="section"
          id="projects"
        >
          <H1>PROJETOS</H1>
          <ProjectsDiv>
            <Project className="project-1" $isAnimated={isAnimated}>
              <ProjectCard>
                {isMobile ? (
                  <img src={chathubHomeMobile} alt="" loading="lazy" />
                ) : (
                  <img src={chathubPreview} alt="" loading="lazy" />
                )}
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

            <Project className="project-2" $isAnimated={isAnimated}>
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
                {isMobile ? (
                  <img src={socialblogHomeMobile} alt="" loading="lazy" />
                ) : (
                  <img src={socialblogHome} alt="" loading="lazy" />
                )}
              </ProjectCard>
            </Project>
          </ProjectsDiv>
        </ProjectsSection>

        <AboutMeSection
          className="section"
          id="about-me"
          $isDivAnimated={isDivAnimated}
        >
          {isMobile ? (
            <H1>
              SOBRE <br />
              MIM
            </H1>
          ) : (
            <H1>SOBRE MIM</H1>
          )}

          <div className="text" ref={divTextRef}>
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
            {isMobile ? (
              <h2>
                Serviços <br />
                oferecidos
              </h2>
            ) : (
              <h2>Serviços oferecidos</h2>
            )}

            <GridMyServices $isGridsAnimated={isGridsAnimated} ref={gridsRef}>
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
