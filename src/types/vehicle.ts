import { array, boolean, Decoder, iso8601, number, object, string } from 'decoders';

export interface Vehicle {
    uuid: string ,
    latency: number,
    statusCode: number,
    label: string,
    filePath: string,
    sendFileAsBody: boolean,

  slug: string;
  title: string;
  description: string;
  tagList: string[];
  createdAt: Date;
  updatedAt: Date;
  favorited: boolean;
  favoritesCount: number;
}

export const vehicleDecoder: Decoder<Vehicle> = object({
    uuid: string ,
    latency: number,
    statusCode: number,
    label: string,
    filePath: string,
    sendFileAsBody: boolean,

  slug: string,
  title: string,
  description: string,
  tagList: array(string),
  createdAt: iso8601,
  updatedAt: iso8601,
  favorited: boolean,
  favoritesCount: number,
});

export interface MultipleVehicles {
  articles: Vehicle[];
  articlesCount: number;
}

export const multipleVehiclesDecoder: Decoder<MultipleVehicles> = object({
  articles: array(vehicleDecoder),
  articlesCount: number,
});


export interface VehicleFilters {
  tag?: string;
  author?: string;
  favorited?: string;
  limit?: number;
  offset?: number;
}

export interface ServiceFilters {
  limit?: number;
  offset?: number;
}
