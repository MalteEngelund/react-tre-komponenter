import style from './nav.module.scss'

export function Nav() {
  return(
    <nav className={style.navMain}>
      <ul className={style.ulStyle}>
        <li className={style.listStyle}><a href="">Home</a></li>
        <li className={style.listStyle}><a href="">About</a></li>
        <li className={style.listStyle}><a href="">Contact</a></li>
      </ul>
    </nav>
  )
}