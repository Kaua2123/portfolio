import { ThemeProvider } from 'styled-components';
import Portfolio from './pages/Portfolio/Portfolio';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Portfolio />
    </ThemeProvider>
  );
}

export default App;
