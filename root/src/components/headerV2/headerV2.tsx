import style from './headerV2.module.scss'


interface HeaderInterface {
  headerText: String,
  colorVariant: 'blue' | 'red'
}

export const Headerv2 = ({headerText = "Mangler Header text", colorVariant}: HeaderInterface) => {
  return(
    <header className={style['header-' + colorVariant]}>
      {headerText}
    </header>
  )
}