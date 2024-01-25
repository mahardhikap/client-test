import { Navigate, Route, Routes, BrowserRouter} from 'react-router-dom';
import { Home } from '../pages/Home';

const App = () => {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace={true} />} />
            <Route path="/home" element={<Home />}/>
            {/* <Route path="/mobile/:id" element={<Auth><GetMobileChat /></Auth>}/>
            <Route path="/dashboard" element={<Auth><Dashboard /></Auth>}/> */}
            {/* <Route path="*" element={<NotFound/>} /> */}
          </Routes>
        </BrowserRouter>
      </>
  );
};

export default App;