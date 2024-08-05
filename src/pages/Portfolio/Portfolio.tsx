import { AboutMe, H1, HeroSection, MainDiv } from './styled';

export default function Portfolio() {
  return (
    <div>
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
    </div>
  );
}
