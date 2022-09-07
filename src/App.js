import { Card } from "./components/Card";
import Title from "./components/Title";
import InputForm from "./components/InputForm";
import "./App.css";

function App() {
  return (
    <div className="body">
      <Card className="card">
        <Title>LBS to KG</Title>
        <InputForm />
        <div className="output-content">
          <div className="output"></div>
        </div>
      </Card>
    </div>
  );
}

export default App;