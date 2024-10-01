"use client";
import {
  ActionIcon,
  Box,
  Button,
  Center,
  Checkbox,
  Divider,
  Drawer,
  Flex,
  Group,
  Menu,
  rem,
  Table,
  Text,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import React from "react";
import style from "../units/Unit.module.css";
import pic from "@/components/assets/images/units.png";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import {
  IconChevronDown,
  IconDotsVertical,
  IconEye,
  IconSearch,
  IconTrash,
  IconX,
} from "@tabler/icons-react";


const Unit = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const Units = [
    {
      unitname: "Kilogram",
      shortname: "Kg",
      Description: "This can be used for meat and other stuffs",
    },
    {
      unitname: "Dozen",
      shortname: "Dz",
      Description: "This can be used for bananas",
    },
    {
      unitname: "Piceses",
      shortname: "Pcs",
      Description: "This can be used for ",
    },
    {
      unitname: "Kilogram",
      shortname: "Kg",
      Description: "This can be used for meat and other stuffs",
    },
    {
      unitname: "Kilogram",
      shortname: "Kg",
      Description: "This can be used for meat and other stuffs",
    },
  ];
  const rows = Units.map((element) => (
    <Table.Tr key={element.unitname}>
      <Table.Td>
        <Group>
          <Checkbox />
          {element.unitname}
        </Group>
      </Table.Td>
      <Table.Td>{element.shortname}</Table.Td>
      <Table.Td>{element.Description}</Table.Td>
      <Table.Td>
        <Menu>
          <Menu.Target>
            <IconDotsVertical />
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item leftSection={<IconEye />}>View</Menu.Item>
            <Menu.Item color="red" leftSection={<IconTrash />}>
              Delete
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Table.Td>
    </Table.Tr>
  ));
  const icon = (
    <IconSearch style={{ width: rem(24), height: rem(24), color: "black" }} />
  );

  return (
    <div className={style.mainHead}>
          <Drawer
            className={style.drawer}
            position="right"
            opened={opened}
            onClose={close}
            padding={24}
            withCloseButton={false}
          >
            <Flex justify="space-between" className={style.drawerMain}>
              <Title order={3}>Add New Product</Title>
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
           <form >
           <Box>
              <Flex mt={34} direction="column" gap={20}>
                <TextInput
                  label="Unit Name"
                  classNames={{
                    label: style.label,
                  }}
                  withAsterisk
                />
                <TextInput
                  label="Short Name"
                  classNames={{
                    label: style.label,
                  }}
                  withAsterisk
                />
                <Textarea
                  label="Description"
                  classNames={{
                    section: style.section,
                    label: style.label,
                  }}
                />
                 <Box className={style.buttons}>
                  <Button className={style.cancel}>Cancel</Button>
                  <Button className={style.save}>Save</Button>
                </Box>
              </Flex>
            </Box>
           </form>
          </Drawer>
      {Units.length === 0 ? (
        <>
          {}
          <Title className={style.head}>Units</Title>
          <Center>
            <Flex className={style.flex}>
              <Center>
                <Image src={pic} alt="empty" className={style.unitimg} />
              </Center>
              <Center>
                <Title order={2} fw={600}>
                  No Units Define Yet
                </Title>
              </Center>

              <Text ta="center" className={style.text}>
                Set up units like &apos;grams&apos; &apos;liters,&apos; or
                &apos;pieces&apos; to manage inventory and pricing efficiently
              </Text>

              <Center>
                <Button w={148} h={40} color="#24BE67" onClick={open}>
                  Add Unit
                </Button>
              </Center>
            </Flex>
          </Center>

        
        </>
      ) : (
        <Box w="100%" pl={24} pr={24}>
          <Flex pb={16} justify="space-between">
            <Box>
              <Title order={4}>Units</Title>
              <Text>
                Manage units of measurement used for products and services.
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
                Add a Unit
              </Button>
            </Group>
          </Flex>
          <Divider my="md" />
          <Box>
            <Flex justify="space-between">
              <Text size="16px" lh={2} fw={600}>
                All Units
              </Text>
              <TextInput
                radius={8}
                placeholder="search category..."
                leftSection={icon}
                w={230}
              />
            </Flex>
          </Box>
          <Table horizontalSpacing="xl" className={style.table}>
            <Table.Thead>
              <Table.Tr p={8}>
                <Table.Th>
                  <Group>
                    {" "}
                    <Checkbox />
                    Unit Name{" "}
                  </Group>
                </Table.Th>
                <Table.Th>Short Name</Table.Th>
                <Table.Th>Description</Table.Th>
                <Table.Th>Action</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Box>
      )}
    </div>
  );
};

export default Unit;
