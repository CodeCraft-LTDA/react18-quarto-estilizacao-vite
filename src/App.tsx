import './App.css'
import { CardStyledComponent } from './components/CardSyledComponent'
import { Input } from './components/Input/Input'
// import { Card } from './components/Card'
import { ThemeProvider } from 'styled-components'
import theme from './theme/theme'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CardStyledComponent />
        <Input />
      </ThemeProvider>
    </>
  )
}

export default App
