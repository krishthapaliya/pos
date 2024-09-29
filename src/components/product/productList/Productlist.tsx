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
  Select,
  Grid,
  Switch,
} from "@mantine/core";
import { Dropzone } from "@mantine/dropzone";
import Image from "next/image";
import pic from "@/components/assets/images/product.png";
import style from "../productList/Productlist.module.css";
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
import { useRef, useState } from "react";

const Category = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const openRef = useRef<() => void>(null);
  const [productType, setProductType] = useState("goods");
  const icon = (
    <IconSearch style={{ width: rem(24), height: rem(24), color: "black" }} />
  );
  type Product = {
    name: string;
    total: number;
  };
  const products: Product[] = [
    // { name: "Hard Drinks", total: 10 },
    // { name: "Dessert", total: 10 },
    // { name: "Dinners", total: 10 },
    // { name: "House Specials", total: 10 },
    // { name: "Lunch", total: 10 },
  ];
  const rows = products.map((product) => (
    <Table.Tr key={product.name}>
      <Table.Td>
        <Group>
          <Checkbox />
          {product.name}
        </Group>
      </Table.Td>
      <Table.Td>{product.total}</Table.Td>
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

  return (
    <Box className={style.mainHead}>
      {products?.length === 0 ? (
        <>
          <Title className={style.head}>Products</Title>
          <Center>
            <Flex className={style.flex}>
              <Center>
                <Image src={pic} alt="empty" className={style.categoryimg} />
              </Center>
              <Center>
                <Title order={2} fw={600}>
                  Your Product List
                </Title>
              </Center>

              <Text ta="center" className={style.text}>
                You haven&apos;t added any products to the menu yet. Start
                adding products to optimize order management and productivity
              </Text>

              <Center>
                <Button w={148} h={40} color="#24BE67" onClick={open}>
                  Add Product
                </Button>
              </Center>
            </Flex>
          </Center>
          <Drawer
            position="right"
            opened={opened}
            onClose={close}
            padding={0}
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

            <Box>
              <Text pl={24} fw={600} size="sm" mb="sm">
                General
              </Text>
              <form className={style.form}>
                <Text className={style.textform}>
                  Product Type <span style={{ color: "red" }}>*</span>
                </Text>
                <Group pl={24}>
                  <Button
                    variant={productType === "Goods" ? "filled" : "outline"}
                    color={productType === "Goods" ? "green" : "gray"}
                    onClick={() => setProductType("Goods")}
                  >
                    Goods
                  </Button>
                  <Button
                    variant={productType === "Services" ? "filled" : "outline"}
                    color={productType === "Services" ? "green" : "gray"}
                    onClick={() => setProductType("Services")}
                  >
                    Services
                  </Button>
                </Group>

                <Text className={style.textform}>
                  Product Name <span style={{ color: "red" }}>*</span>
                </Text>
                <TextInput pl={24} placeholder="e.g. Soft Drinks" required />

                <Text className={style.textform}>
                  Categorization <span style={{ color: "red" }}>*</span>
                </Text>
                <Select
                  pl={24}
                  placeholder="Select Category"
                  data={[
                    { value: "sauce", label: "Sauce and others" },
                    { value: "fruits", label: "Fruits" },
                    { value: "drinks", label: "Soft Drinks" },
                    { value: "nepali", label: "Nepali Dish" },
                  ]}
                />

                <Text className={style.textform}>
                  Image <span style={{ color: "red" }}>*</span>
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

                <Text className={style.textform}>Description</Text>
                <TextInput pl={24} placeholder="e.g. Soft Drinks" />

                <Text pl={24} fw={600} size="sm" mb="sm">
                  Others
                </Text>

                <Grid>
                  <Grid.Col span={6}>
                    {" "}
                    <Box>
                      <Text className={style.textform}>
                        SKU <span style={{ color: "red" }}>*</span>
                      </Text>
                      <TextInput pl={24} placeholder="3.g 876346" />
                    </Box>
                  </Grid.Col>
                  <Grid.Col span={6}>
                    {" "}
                    <Box>
                      <Text className={style.textform}>
                        Opening Quantity <span style={{ color: "red" }}>*</span>
                      </Text>
                      <TextInput placeholder="3.g 876346" />
                    </Box>
                  </Grid.Col>
                  <Grid.Col span={6}>
                    {" "}
                    <Box>
                      <Text className={style.textform}>
                        Re-order Point <span style={{ color: "red" }}>*</span>
                      </Text>
                      <TextInput pl={24} placeholder="3.g 876346" />
                    </Box>
                  </Grid.Col>
                  <Grid.Col span={6}>
                    {" "}
                    <Box>
                      <Text className={style.textform}>
                        HS Code <span style={{ color: "red" }}>*</span>
                      </Text>
                      <TextInput placeholder="3.g 876346" />
                    </Box>
                  </Grid.Col>
                  <Grid.Col span={6}>
                    {" "}
                    <Box>
                      <Text className={style.textform}>
                        Selling Price <span style={{ color: "red" }}>*</span>
                      </Text>
                      <TextInput pl={24} placeholder="3.g 876346" />
                    </Box>
                  </Grid.Col>
                  <Grid.Col span={6}>
                    {" "}
                    <Box>
                      <Text className={style.textform}>
                        Discount <span style={{ color: "red" }}>*</span>
                      </Text>
                      <TextInput placeholder="3.g 876346" />
                    </Box>
                  </Grid.Col>
                  <Grid.Col span={12}>
                    {" "}
                    <Box>
                      <Text className={style.textform}>
                        Unit <span style={{ color: "red" }}>*</span>
                      </Text>
                      <Text pl={24}>
                        The Unit of measurement for the product or service(e.g.
                        Kg, pcs,hr).
                      </Text>
                      <Select
                        pl={24}
                        placeholder="Select Category"
                        data={[
                          { value: "Kg", label: "Kg" },
                          { value: "Pcs", label: "Pcs" },
                          { value: "hr", label: "hr" },
                          { value: "Dozen", label: "Dozen" },
                        ]}
                      />
                    </Box>
                  </Grid.Col>
                </Grid>
                <Group>
                  <Text className={style.textform}>Taxable:</Text>
                  <Switch color="green" />
                </Group>
                <Group w="100%" mt="lg">
                  <Flex pl={24} pr={10} justify="space-between" w="100%">
                    {" "}
                    <Button variant="outline" onClick={close}>
                      Cancel
                    </Button>
                    <Button color="green">Save</Button>
                  </Flex>
                </Group>
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
        </Box>
      )}
    </Box>
  );
};

export default Category;
