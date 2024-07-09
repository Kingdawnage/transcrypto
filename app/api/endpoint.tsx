import { NextApiRequest, NextApiResponse } from "next";
import openai from "../utils/openai";

type Date = {
    name: string
}

export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse<any>
){
    const completion = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: 'what is 2+2'
    });
    const response = completion.data.choices[0].text;

    res.status(200).json({response})
}