import { NextApiRequest, NextApiResponse } from 'next'


//_req 请求对象
//res 响应对象
const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    console.log(_req.query)
    res.status(200).json(['无锡','天津'])
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
