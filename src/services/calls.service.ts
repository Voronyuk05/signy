import axios from "axios"
import { ICall } from "@/types/calls.types"

class CallsService {
    private URL = "http://localhost:4000/calls"

    async getCall(email: string, tel: string) {
        return axios.get<ICall[]>(`${this.URL}?email=${email}&tel=${tel}`).then(
            ({data}) => {return data}
        )
    } 


}

const callsService = new CallsService()

export default callsService

