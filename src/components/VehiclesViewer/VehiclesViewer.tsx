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
  toggleClassName,
  tabs,
  selectedTab,
  onPageChange,
  onTabChange,
}: {
  toggleClassName: string;
  tabs: string[];
  selectedTab: string;
  onPageChange?: (index: number) => void;
  onTabChange?: (tab: string) => void;
}) {
  const { vehicles, currentPage } = useStore(({ vehiclesViewer }) => vehiclesViewer);

  return (
    <Fragment>
      <ArticlesTabSet {...{ tabs, selectedTab, toggleClassName, onTabChange }} />
      <VehicleList vehicles={vehicles} />
    </Fragment>
  );
}


function ArticlesTabSet({
  tabs,
  toggleClassName,
  selectedTab,
  onTabChange,
}: {
  tabs: string[];
  toggleClassName: string;
  selectedTab: string;
  onTabChange?: (tab: string) => void;
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

function Tab({ tab, active, onClick }: { tab: string; active: boolean; onClick: () => void }) {
  return (
    <li >
      <a
        href='#'
        onClick={(ev) => {
          ev.preventDefault();
          onClick();
        }}
      >
        {tab}
      </a>
    </li>
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
        {vehicles.map(({ article }, index) => (
          <VehiclePreview
            key={article.id}
            article={article}
          />
        ))}
        </List>
      </Fragment>
    ),
  });
}