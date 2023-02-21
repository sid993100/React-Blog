import {Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import CreatePost from './CreatePost';
import PostDetail from './PostDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/Navbar' element={<Navbar/>} exact/>
        <Route path="/" element={<Home />} exact/>
        <Route path="/Create-Post" element={<CreatePost />} exact/>
        <Route path="/Post-Detail/:postId" element={<PostDetail />} exact/>
      </Routes>
    </div>
  );
}

export default App;
