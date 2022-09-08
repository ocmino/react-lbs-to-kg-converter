import { Card } from "./components/Card";
import Title from "./components/Title";
import InputForm from "./components/InputForm";
import "./App.css";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="body">
      <Card className="card">
        <Title>LBS to KG</Title>
        <InputForm />
      </Card>
    </div>
  );
}

export default App;
