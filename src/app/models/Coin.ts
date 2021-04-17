import { Image } from './image';

export class Coin {
  id: string;
  symbol: string;
  name: string;
  platforms: object;
  // tslint:disable-next-line:variable-name
  coingecko_rank: number;
  // tslint:disable-next-line:variable-name
  coingecko_score: number;
  description: object;
  image: Image;
  // tslint:disable-next-line:variable-name
  market_data: object;
}
