import style from './header.module.scss'
import { Nav } from '../nav/nav'
import { Dropdown } from '../dropdown/dropdown'

interface HeaderInterface {
  HeaderTitle: String
}

export function Header(props: HeaderInterface) {
  return (
    <header className={style.headerMain}>
      <h2>{props.HeaderTitle}</h2>
      <Dropdown />
      <Nav />
    </header>
  )
}