import axios from "axios";


const encodedData = new Buffer(
  `WxPjcgxsRUgdYWxwNKk3WslYPdbaZqLJ3AAlIb1fWD2LLUvb`,
).toString('base64');


const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

const generateToken = async () => {
  try {
    return await axios.get(
      'https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
      {
        headers: {
          Authorization: `Bearer ${encodedData}`,
          'Content-Type': 'application/json',
        }
      }
    )
  } catch (err) {
    console.log('here', err)
  }

}

export {generateToken}
