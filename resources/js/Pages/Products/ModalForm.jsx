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
    product,
    isOpen,
    onOpen,
    onClose,
    clearProduct,
}) {
    const { data, setData, post, put, processing, errors, reset } = useForm({
        _method: "POST",
        name: "",
        price: "",
        photo: null,
    });

    useEffect(() => {
        if (product) {
            setData({
                _method: "PUT",
                name: product.name,
                price: product.price,
                photo: null,
            });
            onOpen();
        } else {
            reset();
        }
    }, [product]);

    const submit = function (e) {
        e.preventDefault();

        if (product) {
            post(route("products.update", product.id), {
                onSuccess: function (page) {
                    onModalFormClose();
                    reset();
                },
            });
            return;
        }

        post(route("products.store"), {
            onSuccess: function (page) {
                onModalFormClose();
                reset();
            },
        });
    };

    const onModalFormClose = function () {
        onClose();
        clearProduct();
    };

    return (
        <Modal isOpen={isOpen} onClose={onModalFormClose} size={"lg"}>
            <ModalOverlay />
            <form onSubmit={submit} method="POST">
                <ModalContent>
                    <ModalHeader>
                        {product ? "Edit" : "Tambah"} Produk
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody as={Stack} gap={4}>
                        <FormControl isRequired isInvalid={errors.name}>
                            <FormLabel>Nama</FormLabel>
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
                        <FormControl isRequired isInvalid={errors.price}>
                            <FormLabel>Harga (Rp)</FormLabel>
                            <Input
                                type="number"
                                name="price"
                                value={data.price}
                                onChange={(e) =>
                                    setData(e.target.name, e.target.value)
                                }
                            />
                            {errors.price && (
                                <FormErrorMessage>
                                    {errors.price}
                                </FormErrorMessage>
                            )}
                        </FormControl>
                        <FormControl
                            isRequired={product == null}
                            isInvalid={errors.photo}
                        >
                            <FormLabel>File Foto</FormLabel>
                            <Input
                                type="file"
                                name="photo"
                                accept="image/*"
                                onChange={(e) =>
                                    setData(e.target.name, e.target.files[0])
                                }
                            />
                            {errors.photo && (
                                <FormErrorMessage>
                                    {errors.photo}
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
