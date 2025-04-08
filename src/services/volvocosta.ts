import { Err, Ok, Result } from '@hqoss/monads';
import axios from 'axios';
import { array, guard, object, string } from 'decoders';
import settings from '../config/settings';
import {
  Vehicle,
  vehicleDecoder,
  VehicleFilters,
  ServiceFilters,
  MultipleVehicles,
  multipleVehiclesDecoder,
} from '../types/vehicle';
import { GenericErrors, genericErrorsDecoder } from '../types/error';
import { objectToQueryString } from '../types/object';

axios.defaults.baseURL = settings.baseApiUrl;

export async function getVehicles(filters: VehicleFilters  = {}): Promise<MultipleVehicles> {
  const finalFilters: VehicleFilters = {
    limit: 10,
    offset: 0,
    ...filters,
  };
  return guard(multipleVehiclesDecoder)((await axios.get(`v1/vehicle/list`)).data);
}

export async function getServices(filters: ServiceFilters = {}): Promise<MultipleVehicles> {
  const finalFilters: ServiceFilters = {
    limit: 10,
    offset: 0,
    ...filters,
  };
  return guard(multipleVehiclesDecoder)((await axios.get('services')).data);
}
