import Component from './Component'
import { OnHoverProvider } from './HoverContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <OnHoverProvider>
          <Component />
        </OnHoverProvider>
      </header>
    </div>
  );
}

export default App;
