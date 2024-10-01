import {
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Box,
  Title,
  Text,
  Flex,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import Image from "next/image";
import logo from "@/components/assets/logo/Logo.png";
import styles from "@/components/auth/createaccount/Createaccount.module.css";

const CreateAccount = () => {
  const form = useForm({
    initialValues: {
      businessName: "",
      email: "",
      password: "",
      terms: false,
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length >= 8 ? null : "Password must be at least 8 characters",
      terms: (value) => (value ? null : "You must agree to the terms"),
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    console.log(values);
  };

  return (
    <Flex
      align="center"
      justify="center"
      className={styles.main}
      h="calc(100vh)"
    >
      <Box className={styles.box1}>
        <Box className={styles.image}>
          <Image src={logo} width={60} alt="logo" />
        </Box>
        <Box className={styles.box2}>
          <Title order={2}>Let’s Get You Set Up!</Title>
          <Text color="dimmed" size="md">
            Fast and Simple Sign-In — Access Your Account in Seconds, No
            Hassles, No Delays
          </Text>

          <form
            className={styles.form}
            onSubmit={form.onSubmit((values) => handleSubmit(values))}
          >
            <TextInput
              className={styles.input}
              label="Business Name"
              size="md"
              placeholder="Enter your business name"
              {...form.getInputProps("businessName")}
              required
            />

            <TextInput
              className={styles.input}
              size="md"
              label="Email"
              placeholder="Enter your email"
              {...form.getInputProps("email")}
              required
            />

            <PasswordInput
              className={styles.input}
              label="Password"
              size="md"
              placeholder="Create a password"
              {...form.getInputProps("password")}
              required
            />

            <Checkbox
              label={
                <>
                  By creating an account or signing you agree to our{" "}
                  <span
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                  >
                    {" "}
                    Terms and Conditions{" "}
                  </span>{" "}
                </>
              }
              size="md"
              {...form.getInputProps("terms", { type: "checkbox" })}
              required
            />

            <Button type="submit" fullWidth color="green" radius={10}>
              Create an Account
            </Button>
          </form>

          <Text>
            Already have an account?{" "}
            <Text
              component="a"
              size="lg"
              td="underline"
              href="/signin"
              color="green"
            >
              Sign in
            </Text>
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default CreateAccount;
