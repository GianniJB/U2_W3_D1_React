import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageComponent />
        <ButtonComponent btnName="Clicca!" />
        <ButtonComponent btnName="Non Cliccare!" />
        <ImageComponent
          imgSource="https://images.unsplash.com/photo-1718922513048-4de44e5f8fcb?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          imgAlt="un automobile in un parcheggio"
        />
      </header>
    </div>
  );
}

export default App;
