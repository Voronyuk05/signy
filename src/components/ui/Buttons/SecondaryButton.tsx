'use client' 
import styles from './Buttons.module.scss'


export function SecondaryButton({children, color, ...props}: {children: string, color?:string, onClick?(): void}) {
    return (
        <button className={`${styles.secondary_button} ${color}`} {...props}>
            {children}
        </button>
    )
}             