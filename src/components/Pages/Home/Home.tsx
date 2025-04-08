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
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

export function Home() {
  const { tags, selectedTab } = useStoreWithInitializer(({ home }) => home, load);

  return (
    <div >
      <ContainerPage>
       <Box  sx={{ p: 1 }}>
           <Stack direction="column" spacing={0}>
            {renderBanner()}

          <VehiclesViewer
            tabs={buildTabsNames(selectedTab)}
          />
     </Stack>
    </Box>

      </ContainerPage>
    </div>
  );
}
function ArticlesTabSet({
  tabs
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
async function load() {
  store.dispatch(startLoadingVehicles());
  const multipleArticles = await getFeedOrGlobalArticles();
  store.dispatch(loadVehicles(multipleArticles));
}

function renderBanner() {
  return (

    <Box  sx={{ p: 2 }}>
     <Stack direction="row" spacing={5}>
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


