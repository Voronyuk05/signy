import styles from './Headings.module.scss'

export const H6 = ({children, color}: {children: string, color: string}) => {
    return (
        <h6 className={`${styles.h6} ${color}`}>
            {children}
        </h6>
    )
}