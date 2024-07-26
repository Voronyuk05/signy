import axios from "axios"
import { IMailing } from '../types/mailings';

class MailingsService {
    private URL = "http://localhost:4000/mailings"

    async getMailingsByEmail(email: string) {
        return axios.get<IMailing[]>(`${this.URL}?email=${email}`).then(
            ({data}) => {return data}
        )
    } 


}

const mailingsService = new MailingsService()

export default mailingsService

