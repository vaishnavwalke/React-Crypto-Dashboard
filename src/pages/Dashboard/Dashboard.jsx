import { Grid, GridItem } from '@chakra-ui/react';
import DashboardLayout from '../../components/DashboardLayout';
import PortfolioSection from '../Dashboard/components/PortfolioSection';
import PriceSection from '../Dashboard/components/PriceSection';
import Transactions from '../Dashboard/components/Transactions';
import InfoCard from '../Dashboard/components/InfoCard';

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
        <GridItem colSpan={1}>
          <InfoCard imgUrl="/dot_bg.svg"
           text="Learn more about Loans – Keep your Bitcoin, access it’s value without selling it"
           tagText="Loan"
           inverted={false} />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard imgUrl="/grid_bg.svg" 
          text="Learn more about our real estate, mortgage, and  corporate account services"
          tagText="Contact"
          inverted ={true}
          />
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;
