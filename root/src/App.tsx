
import './App.css'
import { Header } from './components/header/header'
import { Main } from './components/mainC/mainC'
import { Footer } from './components/footer/footer'
import { Button } from './components/button/button'
import { Headerv2 } from './components/headerV2/headerV2'
import { Wrapper } from './components/wrapper/wrapper'
import { Liste } from './components/liste/liste'
import { ButtonV2 } from './components/button/buttonV2'

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

      <Wrapper> {/* dynamiske knapper */}
        <ButtonV2 action={() => {alert('du har trykke på den lille knap!')}} size={'small'} theme={'light'} textValue={'small'} />
        <ButtonV2 action={() => {alert('du har trykke på den mellemstore knap!')}} size={'medium'} theme={'dark'} textValue={'medium'} />
        <ButtonV2 action={() => {alert('du har trykke på den store knap!')}} size={'large'} theme={'light'} textValue={'large'} />
      </Wrapper>

      <Button textValue={"Hej Bob"} colorVariant={"green"}/>
      <Button textValue={"Hej Gob"} colorVariant={"blue"}/>
      <Button textValue={"Hej Lucille"} colorVariant={"green"}/>

      {/* <Footer /> */}
    </>
  )
}

export default App
