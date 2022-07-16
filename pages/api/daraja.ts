// import axios from "axios";
// import {generateTokenTest} from '../../services'
//
// generateTokenTest()
//
// const base64EncodedData = Buffer.from(
//   `${process.env.NEXT_PUBLIC_CONSUMER_KEY}:${process.env.NEXT_PUBLIC_CONSUMER_SECRET}`,
// ).toString('base64');
//
//
// const instance = axios.create({
//   baseURL: 'https://some-domain.com/api/',
//   timeout: 1000,
//   headers: {'X-Custom-Header': 'foobar'}
// });
//
// const generateToken = async () => {
//   try {
//     return await axios.get(
//       'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
//       {
//         headers: {
//           Authorization: `Basic ${base64EncodedData}`,
//           // 'Content-Type': 'application/json',
//         }
//       }
//     )
//   } catch (err) {
//     console.log('here', err)
//   }
// }
//
// export {generateToken}
