import axios from "axios"
import { useMutation } from "@tanstack/react-query"
import { IMailing } from "@/types/mailings"

const BASE_URL = "http://localhost:4000/mailings"

export const usePostMailings = () => {
    const { mutate, isSuccess } = useMutation({
        mutationKey: ["add mailings"],
        mutationFn: async (newEmail: IMailing) => axios.post(
            BASE_URL, newEmail
        )
    })

    return {mutate, isSuccess}
}