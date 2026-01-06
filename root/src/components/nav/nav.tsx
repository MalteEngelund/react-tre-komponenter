import style from './nav.module.scss'

export function Nav() {
  return(
    <nav className={style.navMain}>
      <ul className={style.ulStyle}>
        <li className={style.listStyle}><a href="">1</a></li>
        <li className={style.listStyle}><a href="">2</a></li>
        <li className={style.listStyle}><a href="">3</a></li>
      </ul>
    </nav>
  )
}