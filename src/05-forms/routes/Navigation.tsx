import { BrowserRouter, Navigate } from 'react-router-dom'
import { Routes, Route, NavLink } from 'react-router-dom'

import { RegisterPage } from '../pages/RegisterPage'
import { FormikBasicPage } from '../pages/FormikBasicPage'

import logo from '../../logo.svg'

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React logo" />
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
                to="/register"
              >
                Register Page
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
                to="/formik-basic"
              >
                Formik Basic
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
                to="/users"
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/formik-basic" element={<FormikBasicPage />} />
          <Route path="/users" element={<h1>Users Page</h1>} />
          {/* <Route path="/*" element={<Navigate to="/" replace />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  )
}
