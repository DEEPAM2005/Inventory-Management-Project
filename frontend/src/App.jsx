import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router'
// import authRouter from '../routes/auth.js';

// app.use('/api/auth', authRouter);

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
    </Router>
  )
}

export default App
