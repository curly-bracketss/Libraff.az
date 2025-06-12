import axios from 'axios'

const BASE_URL = import.meta.env.VITE_BASE_URL

async function getAllBooks() {
    try {
        const res = await axios.get(`${BASE_URL}/books`)
        return res.data
    } catch (err) {
        console.log('Error fetching books:', err)
        throw err 
    }
}

async function getAllComments() {
    try {
        const res = await axios.get(`${BASE_URL}/comments`)
        return res.data
    } catch (err) {
        console.log('Error fetching comments:', err)
        throw err 
    }
}

export {
    getAllBooks,
    getAllComments
}