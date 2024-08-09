import { Div } from './styled';

import curriculo from '../../assets/curriculo.pdf';
import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
