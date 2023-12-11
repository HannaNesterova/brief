import background from './img/01.jpeg' 
import './App.css';
import MyForm from './MyForm';

function App() {
  return (
    <div className='full-screen-image '>
      <img className='App' src={background}/>
      <MyForm />
  
     
    </div>
  );
}

export default App;
