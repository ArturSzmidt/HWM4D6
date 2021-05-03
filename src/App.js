import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from '../src/Components/MyNavbar';
import ReactFooter from '../src/Components/ReactFooter';
import MyJumbotron from '../src/Components/MyJumbotron';
import MyCard from '../src/Components/MyCard';
import books from '../src/data/fantasy.json';
import { Container, Row } from 'react-bootstrap';
import Comment from '../src/Components/Comment';
import Reservations from '../src/Components/Reservations';
function App() {
  return (
    <div>
      <MyNavbar />
      <MyJumbotron />

      <MyCard />
      {/* <Comment /> */}

      <ReactFooter />
    </div>
  );
}

export default App;
