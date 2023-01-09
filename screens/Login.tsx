import { StyleSheet } from "react-native";
import React from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  HStack,
  Icon,
  Image,
  Input,
  Link,
  Pressable,
  Text,
  View,
  VStack,
  WarningOutlineIcon,
} from "native-base";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MaterialIcons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";

const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email" }),
  password: z.string().min(1, { message: "Please enter your password" }),
});
type loginSchema = z.infer<typeof loginSchema>;

const Login = () => {
  const [show, setShow] = React.useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: loginSchema) => {
    //const formData = getValues();
  };
  return (
    <View pt="3" flex={1} bg="white" alignItems="center">
      <Center w="100%">
        <LottieView
          autoPlay
          style={{ width: 200, height: 200 }}
          source={require("../assets/icons/lock.json")}
        />

        <Box safeArea p="2" py="3" w="100%" maxW="350">
          <Heading
            size="xl"
            fontWeight="600"
            color="coolGray.800"
            _dark={{
              color: "warmGray.50",
            }}
          >
            Welcome
          </Heading>
          <Heading
            mt="1"
            _dark={{
              color: "warmGray.200",
            }}
            color="coolGray.600"
            fontWeight="medium"
            size="xs"
          >
            Please Sign in to continue!
          </Heading>

          <VStack space={3} mt="5">
            <FormControl isInvalid={errors.email ? true : false}>
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, value } }) => (
                  <Input
                    _input={{ fontSize: "lg" }}
                    mb={errors.email ? "0" : "5"}
                    isFocused={errors.email ? true : false}
                    onChangeText={(value) => onChange(value)}
                    value={value}
                    placeholder="Please enter your email"
                  />
                )}
              />
              {errors.email?.message && (
                <FormControl.ErrorMessage
                  mb="5"
                  leftIcon={<WarningOutlineIcon size="sm" />}
                  _text={{
                    fontSize: "sm",
                  }}
                >
                  {errors.email.message}
                </FormControl.ErrorMessage>
              )}
            </FormControl>

            <FormControl isInvalid={errors.email ? true : false}>
              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, value } }) => (
                  <Input
                    type="password"
                    _input={{ fontSize: "lg" }}
                    InputRightElement={
                      <Pressable onPress={() => setShow(!show)}>
                        <Icon
                          as={
                            <MaterialIcons
                              name={show ? "visibility" : "visibility-off"}
                            />
                          }
                          size={6}
                          mr="2"
                          color="muted.400"
                        />
                      </Pressable>
                    }
                    mb={errors.password ? {} : "5"}
                    isFocused={errors.password ? true : false}
                    onChangeText={(value) => onChange(value)}
                    value={value}
                    placeholder="Your password here"
                  />
                )}
              />
              {errors.password && (
                <FormControl.ErrorMessage
                  mb="3"
                  leftIcon={<WarningOutlineIcon size="sm" />}
                  _text={{
                    fontSize: "sm",
                  }}
                >
                  {errors.password.message}
                </FormControl.ErrorMessage>
              )}
              <Link
                _text={{
                  fontSize: "xs",
                  fontWeight: "500",
                  color: "black",
                }}
                alignSelf="flex-end"
                //mt="1"
              >
                Forget Password?
              </Link>
            </FormControl>
            <Button mt="2" onPress={handleSubmit(onSubmit)}>
              Sign in
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text
                fontSize="md"
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
              >
                I'm a new user.{" "}
              </Text>
              <Link
                _text={{
                  color: "indigo.500",
                  fontWeight: "medium",
                  fontSize: "md",
                }}
                href="#"
              >
                Sign Up
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Center>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
