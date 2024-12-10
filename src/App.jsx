
import "./App.css";
import Header from "./components/Header";
import WeatherApp from "./WeatherApp";
function App() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex items-center justify-center h-screen text-white">
        <WeatherApp />
      </div>
    </div>
  );
}

export default App;
