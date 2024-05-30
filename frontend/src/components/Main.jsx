import { Route, Routes } from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import PieceList from './PieceList.jsx'
import PiecePage from './PiecePage.jsx'
import MyActivity from './MyActivity.jsx'
import Cart from './Cart.jsx'
import OrderConfirm from './OrderConfirm.jsx'

const Main = () => {
    return(
        <div className='main'>
            <Routes>
                <Route path = '/' element={<Home/>} />
                <Route path = '/about' element={<About/>} />
                <Route path = '/pieces' element={<PieceList/>} />
                <Route path = '/pieces/:id' element={<PiecePage/>} />
                <Route path = '/myactivity' element={<MyActivity/>} />
                <Route path = '/cart' element={<Cart/>} />
                <Route path = '/orderconfirm' element={<OrderConfirm/>} />
            </Routes>
        </div>
    )
}

export default Main