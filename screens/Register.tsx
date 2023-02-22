import { Platform, StyleSheet } from "react-native";
import React, { useState } from "react";
import {
  Button,
  FormControl,
  Heading,
  HStack,
  Input,
  KeyboardAvoidingView,
  ScrollView,
  Spinner,
  View,
  WarningOutlineIcon,
} from "native-base";
import LottieView from "lottie-react-native";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ProductDetailToAuthStackList } from "../src/types";
import { useNavigation } from "@react-navigation/native";
import PasswordToggleInput from "../components/PasswordToggleInput";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../src/lib/firebaseConfig";

type navigationParams = ProductDetailToAuthStackList["navigation"];
const registerSchema = z
  .object({
    fullname: z.string().min(1, { message: "This field is required" }),
    email: z.string().email({ message: "Please enter a valid email" }),
    location: z.string().min(1, { message: "This field is required" }),
    phone: z
      .string({ required_error: "This field is required" })
      .length(10, { message: "Please enter a valid phone number" }),
    password: z.string().min(1, { message: "Please enter your password" }),
    confirm: z.string().min(1, { message: "Please confirm the password" }),
  })
  .superRefine(({ password, confirm }, ctx) => {
    if (confirm != password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["confirm"],
      });
    }
  });

//HANDLE DUPLICATE ACCOUNT CREATION ERROR FROM FIREBASE

type registerSchema = z.infer<typeof registerSchema>;
const Register = () => {
  const navigation = useNavigation<navigationParams>();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullname: "",
      email: "",
      location: "",
      phone: "",
      password: "",
      confirm: "",
    },
  });
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (data: registerSchema) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, data.email, data.password).then(
      (userCredential) => {
        //userCredential.user.
        //1. trigger mutation to save user details in db
        //2. On success
        setLoading(false);
        setSuccess(true);
        setTimeout(() => {
          //reset(); activate it when everything works
          setSuccess(false);
          navigation.goBack();
        }, 4000);
      }
    );
  };
  if (success)
    return (
      <View flex={1} w="100%" alignItems="center" justifyContent="center">
        <LottieView
          autoPlay
          style={{ width: 250, height: 250 }}
          source={require("../assets/icons/success.json")}
        />
      </View>
    );
  return (
    <ScrollView
      flex={1}
      bg="white"
      w="100%"
      contentContainerStyle={{ alignItems: "center" }}
    >
      <KeyboardAvoidingView
        p="2"
        w="100%"
        maxW="370"
        py="8"
        h={{ base: "1000px", lg: "auto" }}
        alignItems="center"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <HStack alignItems="center">
          <Heading
            size="lg"
            color="coolGray.800"
            _dark={{
              color: "warmGray.50",
            }}
            fontWeight="semibold"
          >
            Hiya
          </Heading>
          <LottieView
            autoPlay
            style={{ width: 45, height: 40, marginBottom: 2 }}
            source={require("../assets/icons/hello.json")}
          />
        </HStack>

        <Heading
          mt="1"
          color="coolGray.600"
          _dark={{
            color: "warmGray.200",
          }}
          fontWeight="medium"
          size="xs"
        >
          Lets set up your account..!
        </Heading>
        <FormControl isInvalid={errors.fullname ? true : false}>
          <FormControl.Label>Fullname</FormControl.Label>
          <Controller
            control={control}
            name="fullname"
            render={({ field: { onChange, value } }) => (
              <Input
                _input={{ fontSize: "lg" }}
                mb={errors.fullname ? "0" : "5"}
                isFocused={errors.fullname ? true : false}
                onChangeText={(value) => onChange(value)}
                value={value}
                placeholder="Please enter your full name"
              />
            )}
          />
          {errors.fullname && (
            <FormControl.ErrorMessage
              mb="5"
              leftIcon={<WarningOutlineIcon size="sm" />}
              _text={{
                fontSize: "sm",
              }}
            >
              {errors.fullname.message}
            </FormControl.ErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={errors.email ? true : false}>
          <FormControl.Label>Email</FormControl.Label>
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
        <FormControl isInvalid={errors.phone ? true : false}>
          <FormControl.Label>Phone</FormControl.Label>
          <Controller
            control={control}
            name="phone"
            render={({ field: { onChange, value } }) => (
              <Input
                _input={{ fontSize: "lg" }}
                mb={errors.email ? "0" : "5"}
                isFocused={errors.phone ? true : false}
                onChangeText={(value) => onChange(value)}
                value={value}
                placeholder="Please enter your phone number"
              />
            )}
          />
          {errors.phone?.message && (
            <FormControl.ErrorMessage
              mb="5"
              leftIcon={<WarningOutlineIcon size="sm" />}
              _text={{
                fontSize: "sm",
              }}
            >
              {errors.phone.message}
            </FormControl.ErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={errors.location ? true : false}>
          <FormControl.Label>Location</FormControl.Label>
          <Controller
            control={control}
            name="location"
            render={({ field: { onChange, value } }) => (
              <Input
                _input={{ fontSize: "lg" }}
                mb={errors.phone ? "0" : "5"}
                isFocused={errors.location ? true : false}
                onChangeText={(value) => onChange(value)}
                value={value}
                placeholder="Please enter your location"
              />
            )}
          />
          {errors.location?.message && (
            <FormControl.ErrorMessage
              mb="5"
              leftIcon={<WarningOutlineIcon size="sm" />}
              _text={{
                fontSize: "sm",
              }}
            >
              {errors.location.message}
            </FormControl.ErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={errors.password ? true : false}>
          <FormControl.Label>Password</FormControl.Label>
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <PasswordToggleInput
                mb={errors.email ? "0" : "5"}
                isFocused={errors.password ? true : false}
                onChangeText={(value) => onChange(value)}
                value={value}
                placeholder="Please enter preferred password"
              />
            )}
          />
          {errors.password && (
            <FormControl.ErrorMessage
              mb="5"
              leftIcon={<WarningOutlineIcon size="sm" />}
              _text={{
                fontSize: "sm",
              }}
            >
              {errors.password.message}
            </FormControl.ErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={errors.confirm ? true : false}>
          <FormControl.Label>Confirm Password</FormControl.Label>
          <Controller
            control={control}
            name="confirm"
            render={({ field: { onChange, value } }) => (
              <PasswordToggleInput
                mb={errors.email ? "0" : "10"}
                isFocused={errors.confirm ? true : false}
                onChangeText={(value) => onChange(value)}
                value={value}
                placeholder="Please confirm password"
              />
            )}
          />
          {errors.confirm && (
            <FormControl.ErrorMessage
              mb="5"
              leftIcon={<WarningOutlineIcon size="sm" />}
              _text={{
                fontSize: "sm",
              }}
            >
              {errors.confirm.message}
            </FormControl.ErrorMessage>
          )}
        </FormControl>
        <Button
          mt="2"
          colorScheme="indigo"
          w="100%"
          onPress={handleSubmit(onSubmit)}
        >
          {loading ? (
            <Spinner accessibilityLabel="Submiting" color="gray" />
          ) : (
            " Sign up"
          )}
        </Button>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({});
