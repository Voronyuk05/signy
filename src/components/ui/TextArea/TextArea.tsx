import styles from './TextArea.module.scss'

export const TextArea = ({placeHolder, ...props}: {placeHolder: string, onChange?(e: React.ChangeEvent<HTMLTextAreaElement>): void, value: string}) => {
    return (
        <textarea className={styles.text_area} placeholder={placeHolder} name="" id="" {...props}></textarea>
    )
}