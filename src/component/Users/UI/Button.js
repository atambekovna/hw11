import styles from './Button.module.css';


const Button = props => {
    return (
        <button 
            type={props.type || 'button'} 
            className={styles.button} 
            onClick={props.onClick}
            id={Math.random().toString()}
        >
            {props.children}

        </button>
    )
}
export default Button