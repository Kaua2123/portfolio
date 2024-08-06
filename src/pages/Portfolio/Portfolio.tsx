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

import javascriptLogo from '../../assets/logo-javascript.svg';
import typescriptLogo from '../../assets/logo-typescript.svg';
import reactLogo from '../../assets/logo-react.svg';
import nodejsLogo from '../../assets/logo-nodejs.svg';
import nestjsLogo from '../../assets/logo-nestjs.svg';
import expressLogo from '../../assets/logo-express.svg';
import mysqlLogo from '../../assets/logo-mysql.svg';
import dockerLogo from '../../assets/logo-docker.svg';
import curriculo from '../../assets/curriculo.pdf';

export default function Portfolio() {
  return (
    <div>
      <Div>
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

        <ProjectsSection className="section">
          <H1>PROJETOS</H1>
          <div
            style={{ display: 'flex', flexFlow: 'column nowrap', gap: '20rem' }}
          >
            <Project>
              <ProjectCard></ProjectCard>
              <ProjectInfo>
                <h2>Chathub</h2>
                <h6>Aplicação de bate papo em tempo real</h6>

                <div
                  style={{ display: 'flex', gap: '2rem', marginTop: '5rem' }}
                >
                  <button className="button-one">REPOSITÓRIO</button>
                  <button className="button-one">VISITAR</button>
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
                  <button className="button-one">REPOSITÓRIO</button>
                  <button className="button-one">VISITAR</button>
                </div>
              </ProjectInfo>
              <ProjectCard></ProjectCard>
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
                <h3>Fale comigo!</h3>
              </div>
              <div>
                <div className="email">kauapaixao37@gmail.com</div>
                <button className="button-one">COPIAR EMAIL</button>
              </div>
            </DivContactMe>
          </div>
        </ContactMeSection>
      </Div>
    </div>
  );
}
