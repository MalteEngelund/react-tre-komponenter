
import './App.css'
import { Header } from './components/header/header'
import { Main } from './components/mainC/mainC'
import { Footer } from './components/footer/footer'
import { Button } from './components/button/button'
import { Headerv2 } from './components/headerV2/headerV2'
import { Wrapper } from './components/wrapper/wrapper'
import { Liste } from './components/liste/liste'

interface LivretterInterface { 
  Livretter: string[]
}
function App() {
  
  const Livretter: LivretterInterface['Livretter'] = [
    "Pizza",
    "Pasta",
    "Burger",
    "Salat",
    "Sushi",
    "Tacos"
  ]


  return (
    <>
      <Header />
      <Headerv2 headerText={'Props er cool!'}  colorVariant={'red'} /> {/* bruger default når der ikke er en prop.. hvorfor skal det være så besværligt at skrive kommentarer, mand? :) */}
      <Main />

      <Wrapper>
        {Livretter.map((ret) => (
          <Liste>{ret}</Liste>
        ))}
      </Wrapper>

      <Button textValue={"is it work"} colorVariant={"blue"}/>
      <Button textValue={"Hej Bob"} colorVariant={"green"}/>
      <Button textValue={"Hej Gob"} colorVariant={"blue"}/>
      <Button textValue={"Hej Lucille"} colorVariant={"green"}/>
      
      <Footer />
    </>
  )
}

export default App
