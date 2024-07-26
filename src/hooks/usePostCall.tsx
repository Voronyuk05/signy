import axios from "axios"
import { useMutation } from "@tanstack/react-query"
import { ICall } from "@/types/calls.types"

const BASE_URL = "http://localhost:4000/calls"

export const usePostCall = () => {
    const { mutate, isSuccess } = useMutation({
        mutationKey: ["add calls"],
        mutationFn: async (newCall: ICall) => axios.post(
            BASE_URL, newCall
        )
    })

    return {mutate, isSuccess}
}