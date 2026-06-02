import { RequestHandler } from "express"

export const addPost: RequestHandler = async (req, res) => {
    //lógica para adicionar um novo post
}

export const editPost: RequestHandler = async (req, res) => {
    //lógica para editar um post existente
}

export const deletePost: RequestHandler = async (req, res) => {
    //lógica para deletar um post
}

export const getAllPosts: RequestHandler = async (req, res) => {
    //lógica para peobter todos os posts
}

export const getPost: RequestHandler = async (req, res) => {
    //lógica para obter um post especifio
}
