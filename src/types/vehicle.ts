import { array, boolean, Decoder, iso8601, number, object, string } from 'decoders';

export interface Vehicle {

          id: number;
        imageURL: string;
        comment: string;

}

export const vehicleDecoder: Decoder<Vehicle> = object({
   id: number,
          imageURL: string,
          comment: string,
});

export interface MultipleVehicles {
  vehicles: Vehicle[];
}

export const multipleVehiclesDecoder: Decoder<MultipleVehicles> = object({
  vehicles: array(vehicleDecoder),
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
