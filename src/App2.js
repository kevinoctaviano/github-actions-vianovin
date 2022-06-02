import { createContext, useState } from 'react';
import CounterApp from './Counter';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//Style
import './Theme.css';

//Declare component context
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <h2 className="sign">Kevin Octaviano</h2>
        <CounterApp />
        <div className="switch">
          {theme === 'light' ? (
            <Button onClick={toggleTheme} variant="outline-success">
              Light Mode
            </Button>
          ) : (
            <Button onClick={toggleTheme} variant="outline-warning">
              Dark Mode
            </Button>
          )}
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
