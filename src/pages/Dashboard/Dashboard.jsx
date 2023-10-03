import { Grid, GridItem } from '@chakra-ui/react';
import DashboardLayout from '../../components/DashboardLayout';
import PortfolioSection from '../Dashboard/components/PortfolioSection';
import PriceSection from '../Dashboard/components/PriceSection';
import Transactions from '../Dashboard/components/Transactions';

const Dashboard = ({}) => {
  return (
    <DashboardLayout title="Dashboard">
      <Grid gridTemplateColumns={{
        base:"repeat(1,1fr)",
        md: "repeat(2,1fr)",
      }} gap="6">
        <GridItem colSpan={2}>
          <PortfolioSection />
        </GridItem>
        <GridItem colSpan={1}>
          <PriceSection />
        </GridItem>
        <GridItem colSpan={1}>
          <Transactions />
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;
