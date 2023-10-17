import { Card } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import { Button } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { AiOutlineDownload } from "react-icons/ai";
import { Icon } from "@chakra-ui/react";
import { Tabs } from "@chakra-ui/react";
import { Tab, TabList } from "@chakra-ui/react";
import { TabPanels } from "@chakra-ui/react";
import { TabPanel } from "@chakra-ui/react";
import { Tag } from "@chakra-ui/react";
import TransactionTable from "./components/TransactionTable";
//transaction
const TransactionPage = () => {
  const tabs = [
    { name: "All", count: 349 },
    { name: "Deposit", count: 114 },
    { name: "Withdrawal", count: 55 },
    { name: "Trade", count: 50 },
  ];

  return (
    <DashboardLayout>
      <Flex justify="end" mt="6" mb="3">
        <Button leftIcon={<Icon as={AiOutlineDownload} />}>Export CSV</Button>
      </Flex>
      <Card>
        <Tabs>
          <TabList pt="4">
            {tabs.map((tab) => (
              <Tab key={tab.name} display="flex" gap="2">
                {tab.name}{" "}
                <Tag colorScheme="gray" borderRadius="full">
                  {tab.count}
                </Tag>
              </Tab>
            ))}
          </TabList>

          <TabPanels>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
};
export default TransactionPage;
