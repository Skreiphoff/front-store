import './App.css';
import Auth from "./components/Auth";
import ProductCard from "./components/Card";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Auth/>

        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
    </div>
  );
}

export default App;
