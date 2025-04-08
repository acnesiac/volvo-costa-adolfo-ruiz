import { Fragment } from 'react';
import { store } from '../../state/store';
import { useStore } from '../../state/storeHooks';
import { Vehicle } from '../../types/vehicle';
import { classObjectToClassName } from '../../types/style';
import { VehiclePreview } from '../VehiclePreview/VehiclePreview';
import { VehiclesViewerState } from './VehiclesViewer.slice';

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
    <div className={toggleClassName}>
      <ul className='nav nav-pills outline-active'>
        {tabs.map((tab) => (
          <Tab key={tab} tab={tab} active={tab === selectedTab} onClick={() => onTabChange && onTabChange(tab)} />
        ))}
      </ul>
    </div>
  );
}

function Tab({ tab, active, onClick }: { tab: string; active: boolean; onClick: () => void }) {
  return (
    <li className='nav-item'>
      <a
        className={classObjectToClassName({ 'nav-link': true, active })}
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
      <div className='article-preview' key={1}>
        Loading vehicles...
      </div>
    ),
    some: (vehicles) => (
      <Fragment>
        {vehicles.length === 0 && (
          <div className='article-preview' key={1}>
            No vehicles are here... yet.
          </div>
        )}
        {vehicles.map(({ article }, index) => (
          <VehiclePreview
            key={article.id}
            article={article}
          />
        ))}
      </Fragment>
    ),
  });
}