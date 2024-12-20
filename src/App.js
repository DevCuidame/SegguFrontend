import React from "react";
import PublicRoutes from './routes/public.routes';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <PublicRoutes />
      </Router>
    </div>
  );
}

export default App;
