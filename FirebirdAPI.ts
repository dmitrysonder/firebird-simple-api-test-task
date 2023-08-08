import axios from "axios";
import 'dotenv/config'

export interface QuoteParams {
  from: string;
  to: string;
  receiver: string;
  amount: string | number;
  deadline?: number;
  slippage?: number;
}

export class FireBirdApi {
  private API_URL = "https://router.firebird.finance/aggregator/v1/";
  chainId: number;

  constructor(chainId: number) {
    this.chainId = chainId;
  }

  async getFirebirdQuote(params: QuoteParams): Promise<any> {
    params.deadline = params.deadline || Date.now() + 500;

    try {
      const data = await axios.get(this.API_URL + "route", {
        headers: { "Content-Type": "application/json", "API-KEY": process.env.API_KEY },
        params: {
          ...params,
          source: "swap_bot",
          chainId: this.chainId,
        },
      });
      const response = { ...data.data };
      delete response.maxReturn.tokens; // removing maxReturn.tokens to fit exact format described in test task
      return response;
    } catch (e) {
      console.error(e);
    }
  }
}


