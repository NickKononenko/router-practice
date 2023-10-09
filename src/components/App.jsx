import { Route, Routes, NavLink } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Домашня сторінка</NavLink>
          </li>
          <li>
            <NavLink to="/dogs">Колекція</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<div>Домашня сторінка 🙄</div>}></Route>
        <Route path="/dogs" element={<div>Колекція собак</div>}></Route>
      </Routes>
    </div>
  );
};
