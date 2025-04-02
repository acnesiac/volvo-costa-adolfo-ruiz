import { Option } from '@hqoss/monads';
import { getVehicles, getServices } from '../../../services/volvocosta';
import { store } from '../../../state/store';
import { useStoreWithInitializer } from '../../../state/storeHooks';
import { VehiclesViewer } from '../../VehiclesViewer/VehiclesViewer';
import {  loadVehicles, startLoadingVehicles } from '../../VehiclesViewer/VehiclesViewer.slice';
import { ContainerPage } from '../../ContainerPage/ContainerPage';
import { changeTab, loadTags, startLoadingTags } from './Home.slice';

export function Home() {
  const { tags, selectedTab } = useStoreWithInitializer(({ home }) => home, load);

  return (
    <div className='home-page'>
      {renderBanner()}
      <ContainerPage>
        <div className='col-md-9'>
          <VehiclesViewer
            toggleClassName='feed-toggle'
            selectedTab={selectedTab}
            tabs={buildTabsNames(selectedTab)}
          />
        </div>

        
      </ContainerPage>
    </div>
  );
}

async function load() {
  store.dispatch(startLoadingVehicles());
  const multipleArticles = await getFeedOrGlobalArticles();
  store.dispatch(loadVehicles(multipleArticles));
}

function renderBanner() {
  return (
    <div className='banner'>
      <div className='container'>
        <h1 className='logo-font'>Volvo Costa - Adolfo Ruiz Rivas </h1>
      </div>
    </div>
  );
}

function buildTabsNames(selectedTab: string) {
  return Array.from(new Set([...(['Vehicles']), 'Services', selectedTab]));
}

async function getFeedOrGlobalArticles() {
  const { selectedTab } = store.getState().home;
  return await (selectedTab === 'Vehicles' ? getVehicles : getServices)(
  );
}


