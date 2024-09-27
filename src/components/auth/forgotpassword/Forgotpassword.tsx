import { TextInput, Button, Box, Title, Text, Flex } from "@mantine/core";
import { useForm } from "@mantine/form";
import Image from "next/image";
import logo from "@/components/assets/logo/Logo.png";
import styles from "@/components/auth/forgotpassword/Forgotpassword.module.css";

const CreateAccount = () => {
  const form = useForm({
    initialValues: {
      email: "",
    },
  });
   
  

  const handleSubmit = (values: typeof form.values) => {
    console.log(values);
  };

  return (
    <Box className={styles.main}>
      <Box className={styles.box1}>
        <Box className={styles.image}>
          <Image src={logo} width={60} alt="logo" />
        </Box>
        <Box className={styles.box2}>
          <Title order={2}>Reset Password</Title>
          <Text>
            Enter the email address associated with your account to receive
            instructions to reset your account.
          </Text>

          <form
            className={styles.form}
            onSubmit={form.onSubmit((values) => handleSubmit(values))}
          >
            <TextInput
              className={styles.input}
              label="Email"
              placeholder="Enter your email"
              {...form.getInputProps("email")}
              required
            />
            <Flex mt={26} justify="center" gap={24}>
              <Text component="a" href="/signin"
                color="green"
                fw={600}
                ta="center"
                w="50%"
                p="auto"
                bg="#fafafa"
              >
                &lt; Back to Sign in
              </Text>

              <Button type="submit" color="green"   w="50%" radius={10} component="a" href="/forgotpassword/checkemail">
                Continue
              </Button>
            </Flex>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateAccount;
