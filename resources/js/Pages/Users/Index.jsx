import AdminLayout from "@/Layouts/AdminLayout";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
    Badge,
    Button,
    HStack,
    Heading,
    IconButton,
    Stack,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    useDisclosure,
    useToast,
} from "@chakra-ui/react";
import { Head } from "@inertiajs/react";
import { FiEye } from "react-icons/fi";
import { useEffect, useState } from "react";
import ModalForm from "@/Pages/Users/ModalForm";

export default function Index({ users, flash }) {
    const {
        isOpen: isModalFormOpen,
        onOpen: onModalFormOpen,
        onClose: onModalFormClose,
    } = useDisclosure();
    const [selectedUser, setSelectedUser] = useState(null);
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
            <Head title="Manajemen User" />
            <AdminLayout>
                <HStack justify={"space-between"} alignItems={"center"} mb="4">
                    <Heading
                        as={"h2"}
                        fontSize={"2xl"}
                        fontWeight={"normal"}
                        mb="6"
                    >
                        Manajemen User
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
                                    <Th width={"20%"}>Nama</Th>
                                    <Th width={"25%"}>Email</Th>
                                    <Th width={"20%"}>Telepon</Th>
                                    <Th width={"20%"}>Status</Th>
                                    <Th width={"15%"}></Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {users.length === 0 && (
                                    <Tr>
                                        <Td colSpan={5} textAlign={"center"}>
                                            Tidak ada data.
                                        </Td>
                                    </Tr>
                                )}
                                {users.map((user) => {
                                    return (
                                        <Tr key={user.id}>
                                            <Td>{user.name}</Td>
                                            <Td>{user.email}</Td>
                                            <Td>{user.phone}</Td>
                                            <Td>
                                                <Badge
                                                    colorScheme={
                                                        user.is_active
                                                            ? "green"
                                                            : "red"
                                                    }
                                                    rounded={"md"}
                                                >
                                                    {user.is_active
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
                                                        setSelectedUser(user)
                                                    }
                                                />
                                                <IconButton
                                                    colorScheme="yellow"
                                                    mr="2"
                                                    size={"xs"}
                                                    icon={<FiEye />}
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
                user={selectedUser}
                clearUser={() => {
                    setSelectedUser(null);
                }}
            />
        </>
    );
}
