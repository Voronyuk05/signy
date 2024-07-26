'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from './Path.module.scss'

export const Path = () => {
    const pathname = usePathname()
    const pathParts = pathname.split('/').filter(part => part);
    
    if (pathname !== '/home') {
        return (
            <div className={styles.path}>
                <Link href='/home'>Signy</Link>
                {pathParts.map((part, index) => {
                    const href = '/' + pathParts.slice(0, index + 1).join('/');
                    return (
                        <>
                            <span> / </span>
                            <Link href={href}>{part}</Link>
                        </>
                    );
                })}
            </div>
        )
    }
}