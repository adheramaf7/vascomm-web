import {
    Button,
    Checkbox,
    Flex,
    Text,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Image,
    Box,
    FormErrorMessage,
} from "@chakra-ui/react";
import LoginCover from "@/images/login-cover.png";
import { Head, useForm } from "@inertiajs/react";
import { useEffect } from "react";

export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <>
            <Head title="Login Admin" />
            <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
                <Flex
                    flex={1}
                    backgroundImage={LoginCover}
                    justify={"center"}
                    alignItems={"center"}
                >
                    <Box maxW={"60%"} textAlign={"center"}>
                        <Heading as={"h2"} fontSize={"5xl"} mb="10">
                            Nama Aplikasi
                        </Heading>
                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Beatae nulla eaque, perferendis qui optio
                            recusandae expedita, eligendi quo quas accusantium
                            quibusdam quaerat obcaecati libero. Odit quibusdam
                            labore blanditiis magni nisi?
                        </Text>
                    </Box>
                </Flex>
                <Flex p={8} flex={1} align={"center"} justify={"center"}>
                    <Stack spacing={4} w={"full"} maxW={"md"}>
                        <Box>
                            <Heading fontSize={"2xl"} mb="2">
                                Selamat Datang Admin
                            </Heading>
                            <Text color={"gray.500"}>
                                Silahkan masukkan email atau nomor telepon dan
                                password Anda untuk mulai menggunakan aplikasi
                            </Text>
                        </Box>
                        <form onSubmit={submit}>
                            <Stack spacing={4}>
                                <FormControl
                                    isRequired
                                    isInvalid={errors.email}
                                >
                                    <FormLabel>Email</FormLabel>
                                    <Input
                                        type="email"
                                        placeholder="Contoh: admin@gmail.com"
                                        rounded={"none"}
                                        name="email"
                                        onChange={(e) =>
                                            setData(
                                                e.target.name,
                                                e.target.value
                                            )
                                        }
                                    />
                                    {errors.email && (
                                        <FormErrorMessage>
                                            {errors.email}
                                        </FormErrorMessage>
                                    )}
                                </FormControl>
                                <FormControl
                                    isRequired
                                    isInvalid={errors.password}
                                >
                                    <FormLabel>Password</FormLabel>
                                    <Input
                                        type="password"
                                        placeholder="Masukkan password"
                                        rounded={"none"}
                                        name="password"
                                        onChange={(e) =>
                                            setData(
                                                e.target.name,
                                                e.target.value
                                            )
                                        }
                                    />
                                    {errors.password && (
                                        <FormErrorMessage>
                                            {errors.password}
                                        </FormErrorMessage>
                                    )}
                                </FormControl>
                                <Button
                                    colorScheme={"blue"}
                                    variant={"solid"}
                                    type="submit"
                                    rounded={"none"}
                                >
                                    MASUK
                                </Button>
                            </Stack>
                        </form>
                    </Stack>
                </Flex>
            </Stack>
        </>
    );
}
