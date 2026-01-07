import { Button } from '../button/button'
import { ImageSlider } from '../imageSlider/imageSlider'
import style from './mainC.module.scss'

const Example = () => {
  const isActive = true

  return (
    <>
      <p style={{ color: "red" }}>
        Hello
      </p>

      {/* Ternary operator (if/else) to switch color */}
      <p style={isActive ? { color: "blue" } : { color: "red" }}>
        Hello
      </p>
    </>
  )
}

export function Main() {
  return (
    <main className={style.mainMain}>
      <Example />
      <Button textValue={"is it work?"} colorVariant={"blue"}/>
      <Button textValue={"Hej Bob Loblaw"} colorVariant={"green"}/>
      <Button textValue={"Hej Gob"} colorVariant={"blue"}/>
      <Button textValue={"Hej Lucille"} colorVariant={"green"}/>
      <ImageSlider />
    </main>
  )
}
