import style from './button.module.scss'


interface ButtonInterface {
  textValue: String,
  colorVariant: 'blue' | 'green'
}

export const Button = (props: ButtonInterface) => {
  return(
    <button className={style['btn-' + props.colorVariant]}>
      {props.textValue}
    </button>
  )
}