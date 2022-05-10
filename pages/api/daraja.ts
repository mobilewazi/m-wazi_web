import axios from "axios";


const encodedData = new Buffer(
  `hTz6Mjk4IaU7mmwhnK84uwClTiMY7KQ3:pT3l5iOY5vgpDc4V`,
).toString('base64');


const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

const generateToken = async () => {
  try {
    return await axios.get(
      'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
      {
        headers: {
          Authorization: `Basic ${encodedData}`,
          // 'Content-Type': 'application/json',
        }
      }
    )
  } catch (err) {
    console.log('here', err)
  }

}

export {generateToken}
