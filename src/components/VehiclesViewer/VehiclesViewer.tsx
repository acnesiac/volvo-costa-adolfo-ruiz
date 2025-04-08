import { Fragment } from 'react';
import { store } from '../../state/store';
import { useStore } from '../../state/storeHooks';
import { Vehicle } from '../../types/vehicle';
import { classObjectToClassName } from '../../types/style';
import { VehiclePreview } from '../VehiclePreview/VehiclePreview';
import { VehiclesViewerState } from './VehiclesViewer.slice';
import List from '@mui/material/List';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

export function VehiclesViewer({
  tabs,

}: {
  tabs: string[];

}) {
  const { vehicles, currentPage } = useStore(({ vehiclesViewer }) => vehiclesViewer);

  return (
    <Fragment>
      <ArticlesTabSet {...{ tabs }} />
      <VehicleList vehicles={vehicles} />
    </Fragment>
  );
}


function ArticlesTabSet({
  tabs,
}: {
  tabs: string[];

}) {
  return (
    <Breadcrumbs aria-label="breadcrumb">
        {tabs.map((tab) => (
          <Link underline="hover" color="inherit" href="/">
             {tab}
           </Link>
        ))}
     </Breadcrumbs>
  );
}


function VehicleList({ vehicles }: { vehicles: VehiclesViewerState['vehicles'] }) {
  return vehicles.match({
    none: () => (
      <div  key={1}>
        Loading vehicles...
      </div>
    ),
    some: (vehicles) => (
      <Fragment>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {vehicles.length === 0 && (
          <div key={1}>
            No vehicles are here... yet.
          </div>
        )}
        {vehicles.map(({ vehicle }, index) => (
          <VehiclePreview
            key={vehicle.id}
            vehicle={vehicle}
          />
        ))}
        </List>
      </Fragment>
    ),
  });
}