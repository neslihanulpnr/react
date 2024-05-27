import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/counterSlice';
import UserList from './userList';

function App() {

  return (
    <div>
       <UserList/>
    </div>
  )
}

export default App
