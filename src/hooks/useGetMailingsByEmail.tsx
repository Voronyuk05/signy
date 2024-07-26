import { useQuery } from "@tanstack/react-query"
import mailingsService from "@/services/mailings.service"

export const useGetMailingsByEmail = (email: string) => {
    const {data} = useQuery({
        queryKey: ['mailings', email], 
        queryFn: () => mailingsService.getMailingsByEmail(email),
        select: data => data
    })

    return {data}
}