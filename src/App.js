import { useSelector, useDispatch } from 'react-redux';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className='App'>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>

      <h1>Login</h1>
      <button onClick={() => dispatch({ type: 'SIGN_IN' })}>Log</button>
    </div>
  );
}

export default App;
