import styles from './postsByCategories.module.scss'
import { H3 } from '../../../../components/ui/Headings/H3';
import { useState } from 'react';
import { useGetPostsByCategory } from '@/hooks/useGetPostsByCategory';
import { PaginatedItems } from '../../../../components/ui/Pagination/Pagination';
import { LoadingCircle } from '@/components/ui/loadingCircle/loadingCircle';
import Link from 'next/link';

export const PostsByCategories = () => {
    const [category, setCategory] = useState<string>('')
    const {data, isPending} = useGetPostsByCategory(category)
    
    if (isPending) {
        return <LoadingCircle/>
    } else if (data)
        return (
            <section className={styles.posts}>
                <div className={styles.container}>
                    <div className={styles.categories}>
                        <div className={`${category === '' ? styles.active : ''}`}  onClick={() => setCategory('')}>
                            <H3 weight='600' color='black'>Все</H3>
                        </div>
                        <div className={`${category === 'news' ? styles.active : ''}`} onClick={() => setCategory('news')}>
                            <H3 weight='600' color='black'>новости</H3>
                        </div>
                        <div className={`${category === 'education' ? styles.active : ''}`} onClick={() => setCategory('education')}>
                            <H3 weight='600' color='black'>обучение</H3>
                        </div>
                        <div className={`${category === 'laws' ? styles.active : ''}`} onClick={() => setCategory('laws')}>
                            <H3 weight='600' color='black'>законы</H3>
                        </div>
                    </div>
                    <div className={styles.pagination}>
                        <PaginatedItems data={data} itemsPerPage={12}/>
                    </div>
                </div>
            </section>
        )
}