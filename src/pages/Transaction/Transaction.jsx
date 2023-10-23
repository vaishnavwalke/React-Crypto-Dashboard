import {
  Card,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
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
import { BiPhoneIncoming } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
//transaction
const TransactionPage = () => {
  const tabs = [
    { name: "All", count: 349 },
    { name: "Deposit", count: 114 },
    { name: "Withdrawal", count: 55 },
    { name: "Trade", count: 50 },
  ];

  return (
    <DashboardLayout title="Transactions">
      <Flex justify="end" mt="6" mb="3">
        <Button leftIcon={<Icon as={AiOutlineDownload} />}>Export CSV</Button>
      </Flex>
      <Card borderRadius="1rem">
        <Tabs>
          <TabList
            pt="4"
            display="flex"
            w="full"
            justifyContent="space-between"
          >
            <HStack>
              {tabs.map((tab) => (
                <Tab key={tab.name} display="flex" gap="2" pb="4">
                  {tab.name}{" "}
                  <Tag colorScheme="gray" borderRadius="full">
                    {tab.count}
                  </Tag>
                </Tab>
              ))}
            </HStack>
            <InputGroup maxW="200px" pr="6">
              <InputLeftElement pointerEvents="none">
                <Icon as={BsSearch} />
              </InputLeftElement>
              <Input type="tel" placeholder="Search..." />
            </InputGroup>
          </TabList>

          <TabPanels>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
};
export default TransactionPage;
