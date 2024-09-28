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
} from "@mantine/core";
import { Dropzone } from "@mantine/dropzone";
import Image from "next/image";
import pic from "@/components/assets/images/Frame 1321315150.png";
import style from "../category/Category.module.css";
import { useDisclosure } from "@mantine/hooks";
import {
  IconDotsVertical,
  IconPhoto,
  IconSearch,
  IconX,
} from "@tabler/icons-react";
import { useRef } from "react";

const Category = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const openRef = useRef<() => void>(null);
  const icon = (
    <IconSearch style={{ width: rem(24), height: rem(24), color: "black" }} />
  );

  const elements = [
    { name: "Hard Drinks", total: 10 },
    { name: "Dessert", total: 10 },
    { name: "Dinners", total: 10 },
    { name: "House Specials", total: 10 },
    { name: "Lunch", total: 10 },
  ];
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>
        <Group>
          <Checkbox />
          {element.name}
        </Group>
      </Table.Td>
      <Table.Td>{element.total}</Table.Td>
      <Table.Td>
        <IconDotsVertical />
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Box className={style.mainHead}>
      {elements?.length === 0 ? (
        <>
          <Title className={style.head}>Categories</Title>
          <Center>
            <Flex className={style.flex}>
              <Center>
                <Image src={pic} alt="empty" className={style.categoryimg} />
              </Center>
              <Center>
                <Title order={2} fw={600}>
                  Product Categories
                </Title>
              </Center>
              <Text className={style.text}>
                Categories make it easier to manage your products and help your
                staff navigate the POS system efficiently
              </Text>
              <Center>
                <Button w={148} h={40} color="#24BE67" onClick={open}>
                  Add Category
                </Button>
              </Center>
            </Flex>
          </Center>
          <Drawer
            position="right"
            opened={opened}
            onClose={close}
            withCloseButton={false}
            padding={0}
          >
            <Flex justify="space-between" className={style.drawerMain}>
              <Title order={3}>Add New Category</Title>
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
                <Text className={style.textform}>
                  Category Name
                  <span
                    style={{
                      color: "red",
                    }}
                  >
                    *
                  </span>
                </Text>
                <TextInput pl={24} placeholder="eg. Soft Drinks" required />
                <Text className={style.textform}>
                  Image
                  <span
                    style={{
                      color: "red",
                    }}
                  >
                    *
                  </span>
                </Text>
                <Dropzone
                  className={style.dropzone}
                  openRef={openRef}
                  onDrop={() => {}}
                  activateOnClick
                >
                  <Center>
                    <Flex gap={rem(4)} className={style.dropzoneitem}>
                      <IconPhoto />
                      Drag an image here or
                      <Text c="#24be67" fw={400}>
                        upload
                      </Text>
                      from gallery.
                    </Flex>
                  </Center>
                </Dropzone>
                <Box className={style.buttons}>
                  <Button className={style.cancel}>Cancel</Button>
                  <Button className={style.save}>Save</Button>
                </Box>
              </form>
            </Box>
          </Drawer>
        </>
      ) : (
        <Box w="100%" pl={24} pr={24}>
          <Flex pb={16} justify="space-between">
            <Box>
              <Title order={4}>Categories</Title>
              <Text>Making it Easy for EMployees to Manage Products</Text>
            </Box>
            <Group>
              <Button>Export</Button>
              <Button w={148} h={40} color="#24BE67" onClick={open}>
                Add Category
              </Button>
            </Group>
          </Flex>
          <Divider my="md" />
          <Box>
            <Flex justify="space-between">
              <Text size="16px" lh={2} fw={600}>
                All Categories
              </Text>
              <TextInput
                radius={8}
                placeholder="search category..."
                leftSection={icon}
                w={230}
              />
            </Flex>
          </Box>
          <Table mt={12}>
            <Table.Thead>
              <Table.Tr p={8} className={style.tr}>
                <Table.Th w="80%">
                  <Group>
                    {" "}
                    <Checkbox />
                    Name{" "}
                  </Group>
                </Table.Th>
                <Table.Th>Total items</Table.Th>
                <Table.Th>Action</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody p={8}>{rows}</Table.Tbody>
          </Table>
        </Box>
      )}
    </Box>
  );
};

export default Category;
