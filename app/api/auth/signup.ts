import type { NextApiRequest, NextApiResponse } from 'next'
import { signup } from '@/app/mainpage/(sectionstarter)/auth/actions'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const formData = new FormData()
        formData.append('email', req.body.email)
        formData.append('name', req.body.name)
        formData.append('password', req.body.password)

        try {
            await signup(formData)
            res.status(200).json({ message: 'Sign up successful' })
        } catch (error) {
            res.status(500).json({error})
        }
    } else {
        res.status(405).end()
    }
}
