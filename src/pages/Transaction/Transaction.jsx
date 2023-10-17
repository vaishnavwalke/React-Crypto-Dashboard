import { Card } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import { Button } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { AiOutlineDownload } from "react-icons/ai";
import { Icon } from "@chakra-ui/react";

const TransactionPage = () => {
  return (
    <DashboardLayout>
      <Flex justify="end" mt="6">
        <Button leftIcon={<Icon as={AiOutlineDownload} />}>Export CSV</Button>
      </Flex>
      <Card>TransactionPage</Card>
    </DashboardLayout>
  );
};
export default TransactionPage;
