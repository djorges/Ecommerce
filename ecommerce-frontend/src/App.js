import './App.css';
import AppbarComponent from './components/AppbarComponent';
import FormComponent from './components/FormComponent';
import DetailsComponent from './components/DetailsComponent';
import ListAllComponent from './components/ListAllComponent';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import PageNotFound from './components/PageNotFound';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppbarComponent />
        <Routes>
          <Route path="/" exact element={<ListAllComponent/>}></Route>
          <Route path="/listar" element={<ListAllComponent/>}></Route>
          <Route path="/registrar" element={<FormComponent update={false} />}></Route>
          <Route path="/modificar/:id" element={<FormComponent update={true} />}></Route>
          <Route path="/:id" element={<DetailsComponent />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
