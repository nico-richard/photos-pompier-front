import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import './styles.sass'
import { NavbarCustom } from './components/NavbarCustom'
import { Home } from './components/Home'
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { themeOptions } from './interfaces/Theme'
import { Vehicles } from './components/Vehicles'
import { Categories } from './components/Categories'

const darkTheme = createTheme(themeOptions)

export const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <NavbarCustom />
        <Container maxWidth='lg' sx={{ marginTop: '2rem' }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/vehicules' element={<Vehicles />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='*' element={<Navigate to={'/'} />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  )
}
