'use client'

import { IPost } from "@/types/posts.types";
import { H5 } from '../Headings/H5';
import { H3 } from '../Headings/H3';
import { Paragraph } from '../Paragraph/Paragraph';
import { useRouter } from "next/navigation";
import { Pill } from "../Pill/Pill";
import Image from "next/image";
import styles from './post.module.scss';

export const Post = ({id, img, title, time, paragraph, tags}: IPost) => {
    const {push} = useRouter()
    const blogTitle =  title.replace(/ /g, '-');
    

    return (
        <div onClick={() => push(`/blog/${blogTitle}`)} className={styles.post}>
            <Image className={styles.img} loader={() => img} src={img} width='370' height='370' alt=""  />
            <div className={styles.post_body}>
                <H5 weight="600" color="black">{time}</H5>
                <H3 weight="700" color="black">{title}</H3>
                <div className={styles.tags}>
                    <Pill >Все теги</Pill>
                    {tags.map((tag) => (
                        <Pill key={tag}>{tag}</Pill>
                    ))}
                </div>
                <Paragraph color='black'>{paragraph}</Paragraph>
            </div>
        </div>
    )
}