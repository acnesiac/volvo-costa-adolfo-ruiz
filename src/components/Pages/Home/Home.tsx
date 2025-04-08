import { Option } from '@hqoss/monads';
import { getVehicles, getServices } from '../../../services/volvocosta';
import { store } from '../../../state/store';
import { useStoreWithInitializer } from '../../../state/storeHooks';
import { VehiclesViewer } from '../../VehiclesViewer/VehiclesViewer';
import {  loadVehicles, startLoadingVehicles } from '../../VehiclesViewer/VehiclesViewer.slice';
import { ContainerPage } from '../../ContainerPage/ContainerPage';
import { changeTab, loadTags, startLoadingTags } from './Home.slice';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';

export function Home() {
  const { tags, selectedTab } = useStoreWithInitializer(({ home }) => home, load);

  return (
    <div >
      <ContainerPage>
            {renderBanner()}

        <div>
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
    <Box sx={{ width: '100%' }}>
     <Stack direction="row" spacing={2}>
    <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>

      <Typography variant="h6" gutterBottom>
            Volvo Costa - Adolfo Ruiz Rivas
      </Typography>
      </Stack>
    </Box>
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


