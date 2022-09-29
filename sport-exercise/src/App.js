import logo from './logo.svg';
import './App.css';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Blog from './components/BlogPage/Blog';

function App() {
  return (
    <div className="">
  
      <Header></Header>
      <Container></Container>
      <Blog></Blog>
    </div>
  );
}

export default App;
