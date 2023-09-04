import { Box, Flex, Image, LinkBox, Stack } from "@chakra-ui/react";

export default function ProductCard({ id, name, price, photo }) {
    const formattedPrice = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
    }).format(price);

    return (
        <Flex
            direction={"column"}
            alignItems={"center"}
            cursor={"pointer"}
            _hover={{ boxShadow: "lg" }}
            p="4"
        >
            <Box flex={1}>
                <Image src={photo} />
            </Box>
            <Box
                mt="4"
                fontSize={18}
                fontWeight={"semibold"}
                textAlign={"left"}
                w="full"
            >
                {name}
            </Box>
            <Box
                fontSize={18}
                fontWeight={"semibold"}
                textAlign={"left"}
                w="full"
                color={"blue.300"}
            >
                {formattedPrice}
            </Box>
        </Flex>
    );
}
