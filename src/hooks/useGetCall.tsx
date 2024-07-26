import { useQuery } from "@tanstack/react-query"
import callsService from "@/services/calls.service"

export const useGetCall = (email: string, tel: string) => {
    const {data} = useQuery({
        queryKey: ['call', email, tel], 
        queryFn: () => callsService.getCall(email, tel),
        select: data => data
    })

    return {data}
}