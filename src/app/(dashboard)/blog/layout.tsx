'use client'

import { RandomPost } from "./randomPost/randomPost"
import { PostsByCategories } from './postsByCategories/postsByCategories';
import { Subscription } from "@/components/ui/subscription/subscription";
import { HiddenDocument } from '../../../components/ui/hiddenDocument/hiddenDocument';
import { usePathname } from "next/navigation";

export default function Blog({children}: {children: React.ReactNode}) {
    const path = usePathname()
    
    return (
        <>
            {children}
            {path === '/blog' ? (
                <>
                    <RandomPost/>
                    <PostsByCategories/>
                </>
            ) : null}
            <Subscription bgColor="secondary"/>
            <HiddenDocument/>
        </>
    )
}