import style from './buttonV2.module.scss'

interface ButtonInterface {
    action: () => void;
    size: 'small' | 'medium' | 'large';
    theme: 'light' | 'dark';
    textValue: string;
}

    export const ButtonV2 = (props: ButtonInterface) => {

      return (
        <button
          onClick={() => props.action()}
          className={`${style[`btn-${props.theme}`]} ${style[`btn-${props.size}`]}`}>

          {props.textValue}
        </button>
      );
    };