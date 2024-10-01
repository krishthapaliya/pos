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
} from "@mantine/core";
import { Dropzone } from "@mantine/dropzone";
import Image from "next/image";
import pic from "@/components/assets/images/category.png";
import style from "../category/Category.module.css";
import { useDisclosure } from "@mantine/hooks";
import {
  IconChevronDown,
  IconDotsVertical,
  IconEye,
  IconPhoto,
  IconSearch,
  IconTrash,
  IconX,
} from "@tabler/icons-react";
import { useRef } from "react";
import { useRouter } from "next/navigation";

const Category = () => {
  const [openedDelete, { open: openDelete, close: closeDelete }] =
    useDisclosure(false);
  const [opened, { open, close }] = useDisclosure(false);

  console.log(openDelete, "openDelete");

  const openRef = useRef<() => void>(null);

  const router = useRouter();

  const icon = (
    <IconSearch style={{ width: rem(24), height: rem(24), color: "black" }} />
  );

  const elements = [
    { id: 1, name: "Hard Drinks", total: 10 },
    { id: 2, name: "Dessert", total: 10 },
    { id: 3, name: "Dinners", total: 10 },
    { id: 4, name: "House Specials", total: 10 },
    { id: 5, name: "Lunch", total: 10 },
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
        <Menu>
          <Menu.Target>
            <IconDotsVertical />
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item
              leftSection={<IconEye />}
              onClick={() => router.push(`view/${element.id}`)}
              
            >
              View
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                openDelete();
              }}
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
        </>
      ) : (
        <Box w="100%" pl={24} pr={24}>
          <Flex pb={16} justify="space-between">
            <Box>
              <Title order={4}>Categories</Title>
              <Text>Making it Easy for EMployees to Manage Products</Text>
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
          <Modal
            opened={openedDelete}
            onClose={closeDelete}
            title="Delete Products"
            className={style.modal}
            classNames={{ title: style.title }}
          >
            <Divider />
            <Text className={style.textdelete}>
              Once deleted this will permanently removed from your system.
              Please confirm if you&pop;d like to continue
            </Text>
            <Flex
              pt={16}
              gap={20}
              pb={16}
              pl={20}
              pr={20}
              justify="space-between"
            >
              <Button w={200} onClick={closeDelete} variant="default">
                Cancel
              </Button>
              <Button w={200} color="red">
                Confirm
              </Button>
            </Flex>
          </Modal>
        </Box>
      )}
    </Box>
  );
};

export default Category;
