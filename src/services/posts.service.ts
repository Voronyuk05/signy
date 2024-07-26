// import axios from "axios"
// import { IPost } from '../types/posts.types';

// class PostsService {
//     // private URL = "https://newsapi.org/v2/everything?sortBy=publishedAt"
//     private URL = "https://newsapi.org/v2/everything?sortBy=publishedAt"
//     private API_KEY = "apiKey=bc9655a1ace34da58299b1782e8ed736"
//     async getPosts(page: number) {
//         return axios.get<{articles: IPost[]}>(`${this.URL}&q=technology&page=${page}&${this.API_KEY}`).then(
//             ({data}) => {return data.articles}
//         )
//     } 

//     async getPostByTitle(title: string) {
//         return axios.get<{articles: IPost[]}>(`${this.URL}&q=${title}&${this.API_KEY}`).then(
//             ({data}) => {return data.articles}
//         )
//     } 

//     async getPostsByCategory(chosenCategory: string) {
//         return axios.get<{articles: IPost[]}>(`${this.URL}&q=${chosenCategory}&${this.API_KEY}`).then(
//             ({data}) => {return data.articles}
//         )
//     }
// }

// const postsService = new PostsService()

// export default postsService


import axios from "axios"
import { IPost } from '../types/posts.types';
import { cache } from "react";

class PostsService {
    private URL = "http://localhost:4000/posts"

    async getPosts() {
        return axios.get< IPost[]>(`${this.URL}`).then(
            ({data}) => {return data}
        )
    } 

    async getPostById(id: number) {
        return axios.get<IPost[]>(`${this.URL}?id=${id}`).then(
            ({data}) => {return data}
        )
    } 

    async getPostByTitle(title: string) {
        return axios.get<IPost[]>(`${this.URL}?title=${title}`).then(
            ({data}) => {return data}
        )
    } 

    async getPostsByCategory(chosenCategory: string) {
        return axios.get<IPost[]>(`${this.URL}?tags[0]=${chosenCategory}`).then(
            ({data}) => {return data}
        )
    }
}

const postsService = new PostsService()

export default postsService

