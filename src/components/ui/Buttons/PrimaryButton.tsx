'use client' 

import styles from './Buttons.module.scss'


export function PrimaryButton({children, color, ...props}: {children: string, color?:string, onClick?(): void}) {

    return (
        <button className={`${styles.primary_button} ${color}`} {...props}>
            {children}
        </button>
    )
}