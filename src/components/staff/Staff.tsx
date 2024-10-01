"use client";
import {
  Box,
  Button,
  Center,
  Flex,
  Text,
  Title,
  Drawer,
  ActionIcon,
  TextInput,
  Group,
  rem,
  Divider,
  Table,
  Checkbox,
  Menu,
  Modal,
  Select,
} from "@mantine/core";
import Image from "next/image";
import pic from "@/components/assets/images/staff.png";
import style from "../staff/Staff.module.css";
import { useDisclosure } from "@mantine/hooks";
import {
  IconCalendar,
  IconChevronDown,
  IconDotsVertical,
  IconEye,
  IconSearch,
  IconTrash,
  IconX,
} from "@tabler/icons-react";

import { useRouter } from "next/navigation";

const Staff = () => {
  const [openedDelete, { open: openDelete, close: closeDelete }] =
    useDisclosure(false);
  const [opened, { open, close }] = useDisclosure(false);

  const router = useRouter();
  console.log(openDelete, "openDelete");

  const icon = (
    <IconSearch style={{ width: rem(24), height: rem(24), color: "black" }} />
  );

  type unit = {
    id: number;
    name: string;
    email: string;
    phoneno: number;
    role: string;
  };
  const elements: unit[] = [
    {
      id: 1,
      name: "Hard Drinks",
      email: "hellonfjh@gmail.com",
      phoneno: 9863457899,
      role: "Admin",
    },
    {
      id: 2,
      name: "Hard Drinks",
      email: "hellonfjh@gmail.com",
      phoneno: 9863457899,
      role: "Admin",
    },
    {
      id: 3,
      name: "Hard Drinks",
      email: "hellonfjh@gmail.com",
      phoneno: 9863457899,
      role: "Admin",
    },
    {
      id: 4,
      name: "Hard Drinks",
      email: "hellonfjh@gmail.com",
      phoneno: 9863457899,
      role: "Admin",
    },
    {
      id: 5,
      name: "Hard Drinks",
      email: "hellonfjh@gmail.com",
      phoneno: 9863457899,
      role: "Admin",
    },
  ];
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>
        <Group>
          <Checkbox />
          {element.name}
        </Group>
      </Table.Td>
      <Table.Td>{element.email}</Table.Td>
      <Table.Td>{element.phoneno}</Table.Td>
      <Table.Td>{element.role}</Table.Td>
      <Table.Td>
        <Menu>
          <Menu.Target>
            <IconDotsVertical />
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item
              leftSection={<IconEye />}
              onClick={() => router.push(`/view/${element.id}`)}
            >
              View
            </Menu.Item>
            <Menu.Item
              onClick={() => router.push(`view/${element.name}`)}
              color="red"
              leftSection={<IconTrash />}
            >
              Delete
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Box className={style.mainHead}>
      <Drawer
        position="right"
        opened={opened}
        onClose={close}
        withCloseButton={false}
        padding={0}
        className={style.drawer}
      >
        <Flex justify="space-between" className={style.drawerMain}>
          <Title order={3}>Add New Staff</Title>
          <ActionIcon
            size={40}
            onClick={close}
            variant="outline"
            fw={400}
            className={style.Action}
          >
            <IconX stroke={2.5} />
          </ActionIcon>
        </Flex>

        <Box>
          <form className={style.form}>
            <Box>
              <Flex direction="column" gap={20}>
                <TextInput
                  label="Staff Name"
                  placeholder="eg. Soft Drinks"
                  classNames={{ label: style.label }}
                  withAsterisk
                />

                <TextInput
                  label="Email Address"
                  classNames={{ label: style.label }}
                  placeholder="eg. Soft Drinks"
                  withAsterisk
                />

                <TextInput
                  label="Phone Number"
                  classNames={{ label: style.label }}
                  type="number"
                  placeholder="eg. Soft Drinks"
                  withAsterisk
                />

                <Select
                  label="Assign Role"
                  classNames={{ label: style.label }}
                  withAsterisk
                  placeholder="Select Role"
                  data={[
                    { value: "admin", label: "Admin" },
                    { value: "manager", label: "Manager" },
                    { value: "dishwasher", label: "Dish Washer" },
                    { value: "waiter", label: "Waiter" },
                  ]}
                />
              </Flex>
            </Box>

            <Flex justify="space-between" className={style.buttons}>
              <Button className={style.cancel}>Cancel</Button>
              <Button className={style.save}>Save</Button>
            </Flex>
          </form>
        </Box>
      </Drawer>
      {elements?.length === 0 ? (
        <>
          <Title className={style.head}>Roles and Permission</Title>
          <Center>
            <Flex
              align="center"
              justify="center"
              direction="column"
              w={378}
              gap={24}
              className={style.flex}
            >
              <Center>
                <Image src={pic} alt="empty" className={style.staffimg} />
              </Center>
              <Center>
                <Title order={2} fw={600}>
                  No Roles or Permissions Set Up
                </Title>
              </Center>
              <Text ta="center" className={style.text}>
                Define roles and assign permissions to control user access and
                ,aintain security.
              </Text>
              <Center>
                <Flex gap={20}>
                  <Button w={148} h={40} variant="default" onClick={open}>
                    Add Roles
                  </Button>
                  <Button w={148} h={40} color="#24BE67" onClick={open}>
                    Add Staffs
                  </Button>
                </Flex>
              </Center>
            </Flex>
          </Center>
        </>
      ) : (
        <Box w="100%">
          <Flex justify="space-between">
            <Box>
              <Title order={4}>Roles and Permissions</Title>
              <Text>
                Define User Roles and Manage Permission for Secure Access
                Control
              </Text>
            </Box>
            <Group>
              <Menu>
                <Menu.Target>
                  <Button
                    rightSection={<IconChevronDown />}
                    className={style.export}
                  >
                    Export
                  </Button>
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Item fw={400}>Download as CSV</Menu.Item>
                  <Menu.Item fw={400}>Download as PDF</Menu.Item>
                </Menu.Dropdown>
              </Menu>
              <Button w={148} h={40} color="#24BE67" onClick={open}>
                Add Staffs
              </Button>
            </Group>
          </Flex>
          <Divider my="md" />
          <Box>
            <Flex justify="space-between">
              <Text size="16px" lh={2} fw={600}>
                All Staffs
              </Text>
              <Flex gap={10}>
                <TextInput
                  radius={8}
                  placeholder="search category..."
                  leftSection={icon}
                  w={230}
                />
                <Button
                  variant="default"
                  radius={8}
                  rightSection={<IconCalendar />}
                >
                  Date
                </Button>
              </Flex>
            </Flex>
          </Box>
          <Table highlightOnHover mt={12}>
            <Table.Thead>
              <Table.Tr p={8} className={style.tr}>
                <Table.Th>
                  <Group>
                    {" "}
                    <Checkbox />
                    Name{" "}
                  </Group>
                </Table.Th>
                <Table.Th>Email Address</Table.Th>
                <Table.Th>Phone no</Table.Th>
                <Table.Th>Role</Table.Th>
                <Table.Th>Action</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody p={8}>{rows}</Table.Tbody>
          </Table>
          <Modal
            centered
            opened={openedDelete}
            onClose={closeDelete}
            title="Delete Employee"
            className={style.modal}
            classNames={{ title: style.title }}
          >
            <Divider size="md" />
            <Flex mt={24} direction="column" gap={24}>
              <Text color="#000000A6" ta="center" className={style.textdelete}>
                Once deleted this will permanently removed from your system.
                Please confirm if you&apos;d like to continue
              </Text>
              <Flex gap={20} justify="space-between">
                <Button w={200} onClick={closeDelete} variant="default">
                  Cancel
                </Button>
                <Button w={200} color="red">
                  Confirm
                </Button>
              </Flex>
            </Flex>
          </Modal>
        </Box>
      )}
    </Box>
  );
};

export default Staff;
