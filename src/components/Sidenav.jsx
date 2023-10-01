import { HStack, Icon, Stack, Text } from '@chakra-ui/react';
import { RxDashboard } from 'react-icons/rx';
const Sidenav = () => {
  const navLinks = [
    { icon: RxDashboard, text: 'Dashboard', link: '/' },
    { icon: RxDashboard, text: 'Transactions', link: '/transactions' },
  ];

  return (
    <Stack>
      {navLinks.map((nav) => {
        console.log(nav.text);
        <HStack key={nav.text}>
          <Icon as={nav.icon} />
          <Text>{nav.text} </Text>
        </HStack>;
      })}
    </Stack>
  );
};
export default Sidenav;
