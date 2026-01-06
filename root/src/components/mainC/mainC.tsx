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
      <ImageSlider />
    </main>
  )
}
