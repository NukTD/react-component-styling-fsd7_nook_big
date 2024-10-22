import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  return (
    <div className="App">
      <div className="button-components-section" style={{gap:'2rem',display:'flex',flexDirection:'column'}}>
        {/* Render ตัว Button 2 แบบ */}
        <Button type="primary"/>
        <Button  type="secondary"/>
      </div>
      <hr />
      <div className="alert-components-section" style={{gap:'2rem',display:'flex',flexDirection:'column'}}>
        {/* Render ตัว Alert 4 แบบ */}
        <Alert type="error"/>
        <Alert type="warning"/>
        <Alert type="alert-info"/>
        <Alert type="success"/>
      </div>
    </div>
  );
}

export default App;
