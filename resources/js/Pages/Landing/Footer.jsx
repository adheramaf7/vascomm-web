import {
    Box,
    Container,
    Image,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import VascommLogo from "@/images/logo.png";
import SocialIcons from "@/images/social-icon.png";

const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
            {children}
        </Text>
    );
};

export default function Footer() {
    return (
        <Stack
            w={"full"}
            px={20}
            py={10}
            borderTop={"1px"}
            borderColor={"gray.100"}
        >
            <SimpleGrid
                templateColumns={{
                    sm: "1fr 1fr",
                    md: "3fr 1fr 1fr 1fr 1fr",
                }}
                spacing={8}
            >
                <Stack spacing={6} direction={"column"} alignItems={"start"}>
                    <Box>
                        <Image src={VascommLogo} />
                    </Box>
                    <Box textAlign={"center"}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Box>
                    <Box>
                        <Image src={SocialIcons} />
                    </Box>
                </Stack>
                <Stack align={"flex-start"}>
                    <ListHeader>Layanan</ListHeader>
                    <Box as="a" href={"#"}>
                        BANTUAN
                    </Box>
                    <Box as="a" href={"#"}>
                        TANYA JAWAB{" "}
                    </Box>
                    <Box as="a" href={"#"}>
                        HUBUNGI KAMI
                    </Box>
                    <Box as="a" href={"#"}>
                        CARA BERJUALAN
                    </Box>
                </Stack>
                <Stack align={"flex-start"}>
                    <ListHeader>Tentang Kami</ListHeader>
                    <Box as="a" href={"#"}>
                        ABOUT US
                    </Box>
                    <Box as="a" href={"#"}>
                        KARIR
                    </Box>
                    <Box as="a" href={"#"}>
                        BLOG
                    </Box>
                    <Box as="a" href={"#"}>
                        KEBIJAKAN PRIVASI
                    </Box>
                    <Box as="a" href={"#"}>
                        SYARAT DAN KETENTUAN
                    </Box>
                </Stack>
                <Stack align={"flex-start"}>
                    <ListHeader>MITRA</ListHeader>
                    <Box as="a" href={"#"}>
                        SUPLIER
                    </Box>
                </Stack>
            </SimpleGrid>
        </Stack>
    );
}
