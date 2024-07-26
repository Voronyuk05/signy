import { Metadata } from "next";

export async function generateMetadata({params}: {params: {slug: string}}): Promise<Metadata> {

    return {title: params.slug}
}

export default function Page() {

    return (
        <div>

        </div>
    )
}