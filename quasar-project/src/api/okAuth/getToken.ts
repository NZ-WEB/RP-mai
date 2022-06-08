import axios from 'axios';

export default class GetToken {
  private static instance: GetToken;

  public static getInstance(): GetToken {
    if (!GetToken.instance) {
      GetToken.instance = new GetToken();
    }
    return GetToken.instance;
  }

  async getToken(login: string, password: string) {
      await axios.post(
        // `${process.env.API_OK_AUTH}/get-token`,
        'http://localhost:5080/get-token',
        JSON.stringify({ login, password }),
        {
          method: 'POST',
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            'Content-Type': 'application/json',
            'Accept': '*/*',
            },
        },
      )
      .then((r) => console.log(r, 'response'));
    console.log(process.env.API_OK_AUTH, login, password);
  }
}
