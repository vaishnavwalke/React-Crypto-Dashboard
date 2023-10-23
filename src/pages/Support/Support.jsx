import DashboardLayout from "../../components/DashboardLayout";
import ContactCard from "./components/ContactCard";
import SupportCard from "./components/SupportCard";
import { IoMdMail } from "react-icons/io";
import { AiTwotoneMessage } from "react-icons/ai";
import InfoCard from "../Dashboard/components/InfoCard";
import { Stack } from "@chakra-ui/react";
const Support = () => {
  return (
    <DashboardLayout>
      <Stack spacing="5rem">
        <SupportCard
          leftcomponent={<ContactCard />}
          title="Contact US"
          text="Have a question or just want to know more? Feel free to reach out to
          us."
          icon={IoMdMail}
        />
        <SupportCard
          leftcomponent={
            <InfoCard
              imgUrl="/grid_bg.svg"
              text="Learn more about our real estate, mortgage, and  corporate account services"
              tagText="Contact"
              inverted={true}
            />
          }
          title="Live Chat"
          text="Don’t have time to wait for the answer? Chat with us now."
          icon={AiTwotoneMessage}
        />
      </Stack>
    </DashboardLayout>
  );
};

export default Support;
