import style from './header.module.scss'
import { Nav } from '../nav/nav'
import { Dropdown } from '../dropdown/dropdown'


export function Header() {
  return (
    <header className={style.headerMain}>
      <Dropdown />
      <Nav />
    </header>
  )
}