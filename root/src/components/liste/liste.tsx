import style from './liste.module.scss';


interface ListeInterface {
  children: React.ReactNode
}

export function Liste({children}: ListeInterface) {
  return(
    <>
      <li className={style.liste}>{children}</li>
    </>
  )
}