import { useState } from 'react';
import AdminSide from './AdminSide';
import './App.css';
import ClientSide from './ClientSide';

function App() {
  const [user,setUser] = useState({admin:1})

  if(user.admin)
    return <AdminSide />

  return <ClientSide />
}

export default App;
