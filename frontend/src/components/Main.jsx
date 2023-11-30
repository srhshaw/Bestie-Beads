import { Route, Routes } from 'react-router-dom'

import Home from './Home.jsx'
import About from './About.jsx'
import PieceList from './PieceList.jsx'
import PiecePage from './PiecePage.jsx'

const Main = () => {
    return(
        <div className='main'>
            <Routes>
                <Route path = '/' element={<Home/>} />
                <Route path = '/about' element={<About/>} />
                <Route path = '/pieces' element={<PieceList/>} />
                <Route path = '/pieces/:id'element={<PiecePage/>} />
            </Routes>
        </div>
    )
}

export default Main