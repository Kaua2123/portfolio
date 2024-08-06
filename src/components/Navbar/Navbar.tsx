import { Div } from './styled';

export default function Navbar() {
  return (
    <div>
      <Div>
        <div>
          <h3>Kauã Paixão</h3>
        </div>
        <div>
          <a href="#">
            <p>INTRO</p>
          </a>
          <p>PROJETOS</p>
          <p>SOBRE</p>
        </div>
        <div>
          <button className="button-two">Baixar currículo</button>
        </div>
      </Div>
    </div>
  );
}
