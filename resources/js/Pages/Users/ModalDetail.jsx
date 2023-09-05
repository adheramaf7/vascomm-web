import {
    Badge,
    Box,
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    Text,
} from "@chakra-ui/react";
import { useEffect } from "react";

export default function ModalDetail({
    user,
    isOpen,
    onOpen,
    onClose,
    clearUser,
}) {
    useEffect(() => {
        if (user) {
            onOpen();
        }
    }, [user]);

    const onModalFormClose = function () {
        onClose();
        clearUser();
    };

    return (
        <Modal isOpen={isOpen} onClose={onModalFormClose} size={"lg"}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Detail User</ModalHeader>
                <ModalCloseButton />
                <ModalBody as={Stack} gap={4}>
                    <Box>
                        <Text color={"gray.500"}>Nama</Text>
                        <Text>{user?.name}</Text>
                    </Box>
                    <Box>
                        <Text color={"gray.500"}>Email</Text>
                        <Text>{user?.email}</Text>
                    </Box>
                    <Box>
                        <Text color={"gray.500"}>Telepon</Text>
                        <Text>{user?.phone}</Text>
                    </Box>
                    <Box>
                        <Text color={"gray.500"}>Status</Text>
                        {user && (
                            <Badge
                                colorScheme={user.is_active ? "green" : "red"}
                                rounded={"md"}
                            >
                                {user.is_active ? "Aktif" : "Tidak Aktif"}
                            </Badge>
                        )}
                    </Box>
                </ModalBody>

                <ModalFooter>
                    <Button variant="ghost" onClick={onModalFormClose}>
                        Cancel
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
