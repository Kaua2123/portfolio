import {
  AboutMe,
  Div,
  H1,
  HeroSection,
  MainDiv,
  Marquee,
  StackDiv,
} from './styled';

import javascriptLogo from '../../assets/logo-javascript.svg';
import typescriptLogo from '../../assets/logo-typescript.svg';
import reactLogo from '../../assets/logo-react.svg';
import nodejsLogo from '../../assets/logo-nodejs.svg';
import nestjsLogo from '../../assets/logo-nestjs.svg';
import expressLogo from '../../assets/logo-express.svg';
import mysqlLogo from '../../assets/logo-mysql.svg';
import dockerLogo from '../../assets/logo-docker.svg';

export default function Portfolio() {
  return (
    <div>
      <Div>
        <MainDiv className="section">
          <HeroSection>
            <div>
              <p>Olá! 👋 Me chamo Kauã e sou</p>
              <H1>
                FULLSTACK
                <br /> DEVELOPER
              </H1>
            </div>
          </HeroSection>
          <AboutMe>
            <p className="about-me-paragraph">
              Sou um desenvolvedor fullstack empenhado em trazer
              <br /> soluções robustas e inovadoras com interfaces limpas
              <br /> e intuitivas.
            </p>
          </AboutMe>
        </MainDiv>

        <StackDiv>
          <Marquee>
            <img src={javascriptLogo} alt="" />
            <img src={typescriptLogo} alt="" />
            <img src={reactLogo} alt="" />
            <img src={nodejsLogo} alt="" />
            <img src={nestjsLogo} alt="" />
            <img src={expressLogo} alt="" />
            <img src={mysqlLogo} alt="" />
            <img src={dockerLogo} alt="" />
          </Marquee>
          <Marquee>
            <img src={javascriptLogo} alt="" />
            <img src={typescriptLogo} alt="" />
            <img src={reactLogo} alt="" />
            <img src={nodejsLogo} alt="" />
            <img src={nestjsLogo} alt="" />
            <img src={expressLogo} alt="" />
            <img src={mysqlLogo} alt="" />
            <img src={dockerLogo} alt="" />
          </Marquee>
        </StackDiv>
      </Div>
    </div>
  );
}
