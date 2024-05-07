import './App.css'
import Container from './Container'
import Product from './Product'

function App() {
  const productName = "buzdolabı"
  return (
    <>
    <Product productName="Ayakkabı" price={3200}/>
    <hr/>
    <Product productName="pantolon" price={950}/>
    <hr/>
    <Product productName={productName} price={15000}/>
   <br/>
   <Container>
    <Product productName={productName} price={50000}/>
    </Container>   
    </>
  )
}

export default App