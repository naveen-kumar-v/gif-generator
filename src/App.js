import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Random from './components/Random'
import Tag from './components/Tag'

function App() {
  return (
    <div className='d-flex flex-column background gap-3'>

      <h5 className='bg-light text-center p-2 text-uppercase container-fluid m-auto w-75 mt-3 rounded'>Random Gif</h5>

      <div className='d-flex flex-column h-100 align-items-center gap-3 '>
        <Random />
        <Tag />
      </div>
    </div>
  );
}

export default App;
