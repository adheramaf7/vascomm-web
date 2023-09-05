import AdminLayout from "@/Layouts/AdminLayout";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
    Badge,
    Button,
    HStack,
    Heading,
    IconButton,
    Image,
    Stack,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    useDisclosure,
    useToast,
} from "@chakra-ui/react";
import { Head, router } from "@inertiajs/react";
import { FiCheck, FiEye } from "react-icons/fi";
import { useEffect, useState } from "react";
import ModalForm from "@/Pages/Products/ModalForm";

export default function Index({ products, flash }) {
    const {
        isOpen: isModalFormOpen,
        onOpen: onModalFormOpen,
        onClose: onModalFormClose,
    } = useDisclosure();
    // const {
    //     isOpen: isModalDetailOpen,
    //     onOpen: onModalDetailOpen,
    //     onClose: onModalDetailClose,
    // } = useDisclosure();
    const [selectedEdit, setSelectedEdit] = useState(null);
    const [selectedDelete, setSelectedDelete] = useState(null);
    const toast = useToast();

    useEffect(() => {
        if (flash.type) {
            toast({
                title: flash.message,
                status: flash.type,
                isClosable: true,
                position: "top",
            });
        }
    }, [flash]);

    return (
        <>
            <Head title="Manajemen Produk" />
            <AdminLayout>
                <HStack justify={"space-between"} alignItems={"center"} mb="4">
                    <Heading
                        as={"h2"}
                        fontSize={"2xl"}
                        fontWeight={"normal"}
                        mb="6"
                    >
                        Manajemen Product
                    </Heading>
                    <Button
                        colorScheme="twitter"
                        rounded={"none"}
                        onClick={onModalFormOpen}
                    >
                        Tambah Data
                    </Button>
                </HStack>
                <Stack rounded={"md"} bg={"white"}>
                    <TableContainer>
                        <Table variant={""}>
                            <Thead
                                bgColor={"blue.400"}
                                color={"white"}
                                rounded={"lg"}
                            >
                                <Tr>
                                    <Th width={"40%"}>Produk</Th>
                                    <Th width={"25%"}>Harga</Th>
                                    <Th width={"20%"}>Status</Th>
                                    <Th width={"15%"}></Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {products.length === 0 && (
                                    <Tr>
                                        <Td colSpan={4} textAlign={"center"}>
                                            Tidak ada data.
                                        </Td>
                                    </Tr>
                                )}
                                {products.map((product) => {
                                    const formattedPrice =
                                        new Intl.NumberFormat("id-ID", {
                                            style: "currency",
                                            currency: "IDR",
                                            maximumFractionDigits: 0,
                                        }).format(product.price);

                                    return (
                                        <Tr key={product.id}>
                                            <Td>
                                                <HStack>
                                                    <Image
                                                        src={product.photo}
                                                        width={10}
                                                        mr="4"
                                                    />
                                                    <Text>{product.name}</Text>
                                                </HStack>
                                            </Td>
                                            <Td>{formattedPrice}</Td>
                                            <Td>
                                                <Badge
                                                    colorScheme={
                                                        product.is_active
                                                            ? "green"
                                                            : "red"
                                                    }
                                                    rounded={"md"}
                                                >
                                                    {product.is_active
                                                        ? "Aktif"
                                                        : "Tidak Aktif"}
                                                </Badge>
                                            </Td>
                                            <Td>
                                                <IconButton
                                                    colorScheme="blue"
                                                    mr="2"
                                                    size={"xs"}
                                                    icon={<EditIcon />}
                                                    onClick={(e) =>
                                                        setSelectedEdit(product)
                                                    }
                                                />
                                                <IconButton
                                                    colorScheme="red"
                                                    mr="2"
                                                    size={"xs"}
                                                    icon={<DeleteIcon />}
                                                    onClick={(e) =>
                                                        setSelectedDelete(
                                                            product
                                                        )
                                                    }
                                                />
                                            </Td>
                                        </Tr>
                                    );
                                })}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Stack>
            </AdminLayout>
            <ModalForm
                isOpen={isModalFormOpen}
                onOpen={onModalFormOpen}
                onClose={onModalFormClose}
                product={selectedEdit}
                clearProduct={() => {
                    setSelectedEdit(null);
                }}
            />
        </>
    );
}
