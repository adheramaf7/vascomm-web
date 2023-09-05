import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
} from "@chakra-ui/react";
import { router, useForm } from "@inertiajs/react";
import { useEffect } from "react";

export default function ModalForm({
    user,
    isOpen,
    onOpen,
    onClose,
    clearUser,
}) {
    const { data, setData, post, put, processing, errors, reset } = useForm({
        name: "",
        email: "",
        phone: "",
    });

    useEffect(() => {
        if (user) {
            setData(user);
            onOpen();
        } else {
            reset();
        }
    }, [user]);

    const submit = function (e) {
        e.preventDefault();

        if (user) {
            put(route("users.update", user.id), {
                onSuccess: function (page) {
                    onModalFormClose();
                    reset();
                },
            });
            return;
        }

        post(route("users.store"), {
            onSuccess: function (page) {
                onModalFormClose();
                reset();
            },
        });
    };

    const onModalFormClose = function () {
        onClose();
        clearUser();
    };

    return (
        <Modal isOpen={isOpen} onClose={onModalFormClose} size={"lg"}>
            <ModalOverlay />
            <form onSubmit={submit} method="POST">
                <ModalContent>
                    <ModalHeader>{user ? "Edit" : "Tambah"} User</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody as={Stack} gap={4}>
                        <FormControl isRequired isInvalid={errors.name}>
                            <FormLabel>Name</FormLabel>
                            <Input
                                type="text"
                                name="name"
                                value={data.name}
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
                                value={data.email}
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
                                value={data.phone}
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
                        <Button variant="ghost" onClick={onModalFormClose}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </form>
        </Modal>
    );
}
