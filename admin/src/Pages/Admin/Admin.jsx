import Sidebar from '../../Components/Sidebar/Sidebar' 
import './Admin.scss'
import {Routes, Route } from 'react-router-dom'
import AddProduct from '../../Components/AddProduct/AddProduct'
import ListProduct from '../../Components/ListProduct/ListProduct'
const Admin = () => {
  return (
    <div className='admin'>
      <Sidebar></Sidebar>
      <Routes>
        <Route path='/addproduct' element={<AddProduct/>}></Route>
        <Route path='/listproduct' element={<ListProduct/>}></Route>
      </Routes>
    </div>
  )
}

export default Admin
