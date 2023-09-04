import VascommLogo from "@/images/logo.png";
import { SearchIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    HStack,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    useDisclosure,
} from "@chakra-ui/react";
import { router, useForm, usePage } from "@inertiajs/react";
import { useEffect } from "react";

const ModalRegister = function ({ isOpen, onOpen, onClose }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        phone: "",
    });

    const submit = function (e) {
        e.preventDefault();

        post(route("customer_register"), {
            onSuccess: function (page) {
                console.log(page);
                onClose();
            },
        });
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} size={"lg"}>
            <ModalOverlay />
            <form onSubmit={submit} method="POST">
                <ModalContent>
                    <ModalHeader>Registrasi</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody as={Stack} gap={4}>
                        <FormControl isRequired isInvalid={errors.name}>
                            <FormLabel>Name</FormLabel>
                            <Input
                                type="text"
                                name="name"
                                onChange={(e) =>
                                    setData(e.target.name, e.target.value)
                                }
                            />
                            {errors.name && (
                                <FormErrorMessage>
                                    {errors.name}
                                </FormErrorMessage>
                            )}
                        </FormControl>
                        <FormControl isRequired isInvalid={errors.email}>
                            <FormLabel>Email</FormLabel>
                            <Input
                                type="email"
                                name="email"
                                onChange={(e) =>
                                    setData(e.target.name, e.target.value)
                                }
                            />
                            {errors.email && (
                                <FormErrorMessage>
                                    {errors.email}
                                </FormErrorMessage>
                            )}
                        </FormControl>
                        <FormControl isRequired isInvalid={errors.phone}>
                            <FormLabel>Phone</FormLabel>
                            <Input
                                type="text"
                                name="phone"
                                onChange={(e) =>
                                    setData(e.target.name, e.target.value)
                                }
                            />
                            {errors.phone && (
                                <FormErrorMessage>
                                    {errors.phone}
                                </FormErrorMessage>
                            )}
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            type="submit"
                            colorScheme="blue"
                            mr={3}
                            isLoading={processing}
                        >
                            Submit
                        </Button>
                        <Button variant="ghost" onClick={onClose}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </form>
        </Modal>
    );
};

const ModalLogin = function ({ isOpen, onOpen, onClose }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = function (e) {
        e.preventDefault();

        post(route("customer_login"), {
            onSuccess: function (page) {
                console.log(page);
                onClose();
            },
        });
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} size={"lg"}>
            <ModalOverlay />
            <form onSubmit={submit} method="POST">
                <ModalContent>
                    <ModalHeader>Login</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody as={Stack} gap={4}>
                        <FormControl isRequired isInvalid={errors.email}>
                            <FormLabel>Email</FormLabel>
                            <Input
                                type="email"
                                name="email"
                                onChange={(e) =>
                                    setData(e.target.name, e.target.value)
                                }
                            />
                            {errors.email && (
                                <FormErrorMessage>
                                    {errors.email}
                                </FormErrorMessage>
                            )}
                        </FormControl>
                        <FormControl isRequired isInvalid={errors.password}>
                            <FormLabel>Password</FormLabel>
                            <Input
                                type="password"
                                name="password"
                                onChange={(e) =>
                                    setData(e.target.name, e.target.value)
                                }
                            />
                            {errors.password && (
                                <FormErrorMessage>
                                    {errors.password}
                                </FormErrorMessage>
                            )}
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            type="submit"
                            colorScheme="blue"
                            mr={3}
                            isLoading={processing}
                        >
                            Login
                        </Button>
                        <Button variant="ghost" onClick={onClose}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </form>
        </Modal>
    );
};

export default function Header() {
    const {
        isOpen: isModalRegisterOpen,
        onOpen: onModalRegisterOpen,
        onClose: onModalRegisterClose,
    } = useDisclosure();

    const {
        isOpen: isModalLoginOpen,
        onOpen: onModalLoginOpen,
        onClose: onModalLoginClose,
    } = useDisclosure();

    const user = usePage().props.auth.user;

    const logout = function () {
        router.post(route("customer_logout"));
    };

    return (
        <>
            <ModalRegister
                isOpen={isModalRegisterOpen}
                onOpen={onModalRegisterOpen}
                onClose={onModalRegisterClose}
            />
            <ModalLogin
                isOpen={isModalLoginOpen}
                onOpen={onModalLoginOpen}
                onClose={onModalLoginClose}
            />
            <Stack
                w="full"
                boxShadow={"sm"}
                px={10}
                py={4}
                direction={"row"}
                justify={"space-between"}
            >
                <Box>
                    <Image src={VascommLogo} />
                </Box>
                <Flex w="full" justify={"center"}>
                    <InputGroup w="50%">
                        <Input
                            placeholder="Cari parfum kesukaanmu"
                            bgColor={"gray.100"}
                        />
                        <InputRightElement>
                            <SearchIcon />
                        </InputRightElement>
                    </InputGroup>
                </Flex>
                <HStack spacing={2}>
                    {user && (
                        <Flex>
                            <Box mr="3">Hello, {user.name}</Box>
                            <Button
                                colorScheme="red"
                                rounded={"none"}
                                onClick={logout}
                            >
                                LOGOUT
                            </Button>
                        </Flex>
                    )}
                    {!user && (
                        <>
                            <Button
                                variant={"outline"}
                                colorScheme="twitter"
                                rounded={"none"}
                                onClick={onModalLoginOpen}
                            >
                                MASUK
                            </Button>
                            <Button
                                colorScheme="twitter"
                                rounded={"none"}
                                onClick={onModalRegisterOpen}
                            >
                                DAFTAR
                            </Button>
                        </>
                    )}
                </HStack>
            </Stack>
        </>
    );
}
