import { Div } from './styled';

import curriculo from '../../assets/curriculo.pdf';
import { useState } from 'react';
import { Menu } from 'lucide-react';

export type NavbarProps = {
  isMobile: boolean;
};

export default function Navbar({ isMobile }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <Div $isMenuOpen={isMenuOpen}>
        {isMobile && (
          <div className="hamburguer">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{ border: 'none', background: 'inherit' }}
            >
              <Menu color="white" size={40} />
            </button>
          </div>
        )}

        <div>
          <h5>Kauã Paixão</h5>
        </div>
        <div className="options">
          <a href="#">
            <p>INTRO</p>
          </a>
          <a href="#projects">
            <p>PROJETOS</p>
          </a>

          <a href="#about-me">
            <p>SOBRE</p>
          </a>
        </div>
        <div className="download-cv">
          <a href={curriculo} download={'curriculo.pdf'}>
            <button className="button-two">Baixar currículo</button>
          </a>
        </div>
      </Div>
    </div>
  );
}
