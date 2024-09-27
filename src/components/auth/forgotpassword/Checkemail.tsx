import {  Button, Box, Title, Text } from "@mantine/core";
// import { useForm } from "@mantine/form";
import Image from "next/image";
import logo from "@/components/assets/logo/Logo.png";
import styles from "@/components/auth/forgotpassword/Forgotpassword.module.css";

const CreateAccount = () => {
  
  return (
    <Box className={styles.main}>
      <Box className={styles.box1}>
        <Box className={styles.image}>
          <Image src={logo} width={60} alt="logo" />
        </Box>
        <Box className={styles.box2}>
          <Title order={2}>Check Your Email!</Title>
          <Text>
          We’ve sent a reset link to your email. Please check your inbox and follow the instructions. If it’s not there, check your spam folder.
          </Text>

          <Button
                component="a"
                href="/signin"
                c={"green"}
                fw={600}
                
                ta="center"
                w="100%"
                mt={20}
                p="1px 8px"
                bg="#fafafa"
              >
                &lt; Back to Sign in
              </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateAccount;
