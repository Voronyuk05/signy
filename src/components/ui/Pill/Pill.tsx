import styles from './Pill.module.scss'

export const Pill = ({children} : {children: string}) => {
    return (
        <span className={styles.pill}>{children}</span>
    )
}