import axios from "axios"
import { useMutation } from "@tanstack/react-query"
import { IContact } from "@/types/contactForm"

const BASE_URL = "http://localhost:4000/contacts"

export const usePostConact = () => {
    const { mutate } = useMutation({
        mutationKey: ["add contact"],
        mutationFn: async (newContact: IContact) => axios.post(
            BASE_URL, newContact
        )
    })

    return {mutate}
}