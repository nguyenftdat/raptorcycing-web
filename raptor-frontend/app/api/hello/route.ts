export async function GET(request: Request) {
  return new Response('Hello, Next.js!')
}

// import type { NextApiRequest, NextApiResponse } from 'next'

// interface Time {
//   date: string;
//   milliseconds_since_epoch: number;
//   time: string;
// }

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   if (req.method !== 'GET') {
//     res.status(500).json({message: 'failed'});
//   } else {
//     const response = await fetch('http://time.jsontest.com/');
//     const data: Time = await response.json();
//     res.status(200).json({
//       'date': data.date,
//       'time in ms': data.milliseconds_since_epoch,
//       'time': data.time
//     })
//   }
// }
