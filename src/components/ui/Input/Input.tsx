
import styles from './Input.module.scss'
import { validateEmailInput, validateTelInput } from './validateInput'

export const Input = ({placeHolder, name, value, ...props}: {placeHolder: string, onChange?(e: React.ChangeEvent<HTMLInputElement>): void, id?: string, value?: string, name?: string}) => {
    let validateStyle: string = ''    
    if (value && name === 'email') validateStyle = validateEmailInput(value)
    else if (value && name === 'tel') validateStyle =  validateTelInput(value)
    
    return (
        <div className={styles.wrapper_input}>
            <input className={`${styles.input} ${validateStyle}`} placeholder={placeHolder} type="text" {...props} />
            {validateStyle === 'incorrect' ? (
                <img className={styles.signal} src="/incorrect.svg" alt="" />
            ): validateStyle === 'correct' ? (
                <img className={styles.signal} src="/correct.svg" alt="" />   
            ): ''}
        </div>
    )
}