"use client";
import {
  IconCash,
  IconTable,
  IconLockAccess,
  IconTiltShift,
  IconSettings,
  IconHelp,
  IconLayoutDashboard,
  IconTags,
  IconNotes,
  IconFileDollar,
  IconReceipt2,
} from "@tabler/icons-react";

import { Accordion, AppShell, Box, Group, NavLink, Text } from "@mantine/core";
import React from "react";
import styles from "../sidebar/Sidebar.module.css";
import Image from "next/image";
import logo from "@/components/assets/logo/Logo.png";

const navItems = [
  {
    section: "General",
    items: [
      { icon: IconLayoutDashboard, label: "Dashboard" },
      {
        icon: IconTags,
        label: "Product",
        subItems: [
          {
            label: "Category",
          },
          {
            label: "Products List",
          },
          { label: "Units" },
        ],
      },
      {
        icon: IconNotes,
        label: "Orders",
        subItems: [{ label: "Tables" }, { label: "KOT" }],
      },
      { icon: IconFileDollar, label: "Invoices" },
      { icon: IconReceipt2, label: "Receipts" },
    ],
  },
  {
    section: "Management",
    items: [
      { icon: IconCash, label: "Cash Collected" },
      { icon: IconTable, label: "Table & Space" },
      { icon: IconLockAccess, label: "Roles & Permission" },
      { icon: IconTiltShift, label: "Shift Management" },
    ],
  },
  {
    section: "Others",
    items: [
      { icon: IconSettings, label: "Settings" },
      { icon: IconHelp, label: "Help & Support" },
    ],
  },
];

const sidebar = () => {
  //   const [active, setActive] = useState(0);

  //   const items = data.map((item, index) => (
  //     <NavLink
  //       href="#required-for-focus"
  //       key={item.label}
  //       active={index === active}
  //       label={item.label}
  //       rightSection={item.rightSection}
  //       leftSection={<item.icon size="1rem" stroke={1.5} />}
  //       onClick={() => setActive(index)}
  //     />
  //   ));
  return (
    <AppShell>
      <AppShell.Navbar className={styles.navbar}>
        <Box className={styles.image}>
          <Group>
            <Image src={logo} alt="logo" width={24} />
            <Text>Company</Text>
          </Group>
        </Box>
        <Box>
          {navItems.map((navSection, index) => (
            <Box
              key={index}
              className={styles[navSection.section.toLowerCase()]}
            >
              <Text className={styles.textSection}>{navSection.section}</Text>
              <Box>
                {navSection.items.map((item, idx) =>
                  item.subItems ? (
                    <Accordion key={idx} className={styles.Accordion}>
                      <Accordion.Item
                        value={item.label.toLowerCase()}
                        key={item.label}
                      >
                        <Accordion.Control styles={{ control: { fontSize: '38px' } }}>
                          <NavLink
                            key={idx}
                            className={styles.navItem}
                            label={item.label}
                            leftSection={
                              <item.icon className={styles.navIcon} />
                            }
                          />
                        </Accordion.Control >
                        <Accordion.Panel>
                          {item.subItems.map((subItem, subIdx) => (
                            <NavLink
                              key={subIdx}
                              className={styles.submenuItem}
                              
                              label={subItem.label}
                            />
                          ))}
                        </Accordion.Panel>
                      </Accordion.Item>
                    </Accordion>
                  ) : (
                    <NavLink
                      key={idx}
                      className={styles.navItem}
                      label={item.label}
                      leftSection={<item.icon className={styles.navIcon} />}
                    />
                  )
                )}
              </Box>
            </Box>
          ))}
        </Box>

        {/*
        <Box className={styles.general}>
          <Text className={styles.textSection}>General</Text>
          <Box>
            <NavLink
              className={styles.navItem} 
              label="Dashboard"
              leftSection={<IconLayoutDashboard size="20px" className={styles.navIcon} />}
            />
            <NavLink
              className={styles.navItem}
              label="Products"
              leftSection={<IconTags  size="20px" className={styles.navIcon} />}
            />
            {/* <Box className={styles.submenu}>
              <Text className={styles.submenuItem}>Category</Text>
              <Text className={styles.submenuItem}>Products List</Text>
              <Text className={styles.submenuItem}>Units</Text>
            </Box> 
            <NavLink
              className={styles.navItem}
              label="Orders"
              leftSection={<IconMenuOrder size="20px" className={styles.navIcon} />}
            />
            <NavLink
              className={styles.navItem}
              label="Invoices"
              leftSection={<IconInvoice size="20px" className={styles.navIcon} />}
            />
            <NavLink
              className={styles.navItem}
              label="Receipts"
              leftSection={<IconReceipt size="20px" className={styles.navIcon} />}
            />
          </Box>
        </Box>
        <Box className={styles.management}>
          <Text className={styles.textSection}>Management</Text>
          <Box>
            <NavLink
              className={styles.navItem}
              label="Cash Collected"
              leftSection={<IconCash size="20px" className={styles.navIcon} />}
            />
            <NavLink
              className={styles.navItem}
              label="Table & Space"
              leftSection={<IconTable size="20px" className={styles.navIcon} />}
            />
            <NavLink
              className={styles.navItem}
              label="Roles & Permissions"
              leftSection={<IconLockAccess size="20px" className={styles.navIcon} />}
            />
            <NavLink
              className={styles.navItem}
              label="Shift Management"
              leftSection={<IconTiltShift size="20px" className={styles.navIcon} />}
            />
          </Box>
        </Box>
        <Box className={styles.others}>
          <Text className={styles.textSection}>Others</Text>
          <Box>
            <NavLink
              className={styles.navItem}
              label="Settings"
              leftSection={<IconSettings size="20px" className={styles.navIcon} />}
            />
            <NavLink
              className={styles.navItem}
              label="Help & support"
              leftSection={<IconHelp size="20px" className={styles.navIcon} />}
            />
          </Box>
        </Box>*/}
      </AppShell.Navbar>
    </AppShell>
  );
};

export default sidebar;
