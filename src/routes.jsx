import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                {/* <Route path='*' element={<NotFound />} /> */}
            </Routes>
        </Router>
    );
};