import VascommLogo from "@/images/logo.png";
import { SearchIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    Flex,
    HStack,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
} from "@chakra-ui/react";

export default function Header() {
    return (
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
                <Button
                    variant={"outline"}
                    colorScheme="twitter"
                    rounded={"none"}
                >
                    MASUK
                </Button>
                <Button colorScheme="twitter" rounded={"none"}>
                    DAFTAR
                </Button>
            </HStack>
        </Stack>
    );
}
