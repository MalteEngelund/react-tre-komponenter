
import './App.css'
import { Header } from './components/header/header'
import { Main } from './components/mainC/mainC'
import { Footer } from './components/footer/footer'
import { Button } from './components/button/button'
import { Headerv2 } from './components/headerV2/headerV2'

function App() {


  return (
    <>
      <Header />
      <Headerv2 headerText={'Props er cool!'} colorVariant={'red'} /> {/* bruger default når der ikke er en prop.. hvorfor skal det være så besværligt at skrive kommentarer, mand? :) */}
      <Main />
      <Button textValue={"is it work"} colorVariant={"blue"}/>
      <Button textValue={"Hej Bob"} colorVariant={"green"}/>
      <Button textValue={"Hej Gob"} colorVariant={"blue"}/>
      <Button textValue={"Hej Lucille"} colorVariant={"green"}/>
      <Footer />
    </>
  )
}

export default App
