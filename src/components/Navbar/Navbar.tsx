import { Div } from './styled';

import curriculo from '../../assets/curriculo.pdf';

export default function Navbar() {
  return (
    <div>
      <Div>
        <div>
          <h5>Kauã Paixão</h5>
        </div>
        <div>
          <a href="#">
            <p>INTRO</p>
          </a>
          <a href="#projects">
            <p>PROJETOS</p>
          </a>
          <p>SOBRE</p>
        </div>
        <div>
          <a href={curriculo} download={'curriculo.pdf'}>
            <button className="button-two">Baixar currículo</button>
          </a>
        </div>
      </Div>
    </div>
  );
}
