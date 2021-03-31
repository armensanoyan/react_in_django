import './App.css';
import 'styled-components'
import Audio from './Audio'

function MatrixForm(props) {
  function countMatrix(event) {
    console.log(event.target)
  }

  const inputs = Array(props.dim).fill(3).map(() =>  {
    return (
      <div>
        { Array(props.dim+1).fill(2).map((e, index) => <input type="number" key={index} defaultValue={0} />) }
      </div>
    )
  } )

  return (
    <form>
      { inputs }
      <input type="submit" value="Submit" onClick={countMatrix}/>
    </form>
  )
}

function App() {
  return (
    <div className="App">
      <Audio/>
    </div>
  );
}

export default App;
