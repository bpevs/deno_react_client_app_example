import React from 'react';
import { createRoot } from 'react-dom/client';

import Counter from "./components/counter.tsx";

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

const container = document.getElementById('mount')!;
createRoot(container).render(<App />);
