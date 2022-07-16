import axios from "axios";

const darajaAPI = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_MWAZI_BASE_URL}`,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials':true,
  }
});

export const GenerateTokenTest = async () => {
  try {
    return await darajaAPI.post('/lipanampesa/requestpayment')
  } catch (err) {
    console.log('here', err)
  }
}
