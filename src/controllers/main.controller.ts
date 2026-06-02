import { RequestHandler } from "express"

export const getAllPosts: RequestHandler = async (req, res) => {
    return res.json({ message: 'Obtendo todos os posts...'})
}

export const getPost: RequestHandler = async (req, res) => {
    return res.json({ message: `Obtendo o post com o slug: ${req.params.slug}` })
}

export const getRelatedPost: RequestHandler = async (req, res) => {
    return res.json({ message: `Obtendo os posts relacionados com o slug: ${req.params.slug}` })
}