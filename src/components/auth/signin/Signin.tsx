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
  import styles from "@/components/auth/signin/Signin.module.css";
  
  const CreateAccount = () => {
    const form = useForm({
      initialValues: {
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
      <Box className={styles.main}>
        <Box className={styles.box1}>
          <Box className={styles.image}>
            <Image src={logo} width={60} alt="logo" />
          </Box>
          <Box className={styles.box2}>
            <Title order={2}>Sign In</Title>
            <Text>
              New To POS?{" "}
              <Text component="a" href="/createaccount" color="green">
                Create an account.
              </Text>
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
  
              <PasswordInput
                className={styles.input}
                label="Password"
                placeholder="Create a password"
                {...form.getInputProps("password")}
                required
              />
                <Flex justify="space-between" gap={100} >
              <Checkbox
                label="Remember me"
                size="sm"
                {...form.getInputProps("terms", { type: "checkbox" })}
                required
              />
              <Text color="green" td="underline"  component="a" href="/forgotpassword" >Forgot Password?</Text>
              </Flex>
              <Button type="submit" fullWidth color="green" radius={10}>
                Sign in
              </Button>
            </form>
  
           
          </Box>
        </Box>
      </Box>
    );
  };
  
  export default CreateAccount;
  