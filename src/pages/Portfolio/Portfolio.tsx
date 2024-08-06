import { useState } from 'react';

import {
  AboutMe,
  ButtonIcon,
  ContactMeSection,
  Div,
  DivContactMe,
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

import { FileText, Linkedin, Github, Mail } from 'lucide-react';

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
import chathubHome from '../../assets/chathub-home.jpg';
import socialblogHome from '../../assets/socialblog-home.jpg';

export default function Portfolio() {
  const [isCopied, setIsCopied] = useState(false);

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
              <a href={curriculo} download={'curriculo.pdf'}>
                <ButtonIcon>
                  <FileText size={'4rem'} />
                </ButtonIcon>
              </a>

              <a
                href="https://www.linkedin.com/in/kaua-paixao/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ButtonIcon>
                  <Linkedin size={'4rem'} />
                </ButtonIcon>
              </a>

              <a
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

        <ProjectsSection className="section" id="projects">
          <H1>PROJETOS</H1>
          <div
            style={{ display: 'flex', flexFlow: 'column nowrap', gap: '20rem' }}
          >
            <Project>
              <ProjectCard>
                <img src={chathubHome} alt="" />
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
              <div>
                <div className="email">kauapaixao37@gmail.com</div>
                <button className="button-one" onClick={copyEmail}>
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
