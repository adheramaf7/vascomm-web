import { Head } from "@inertiajs/react";
import Footer from "@/Pages/Landing/Footer";
import Header from "@/Pages/Landing/Header";
import {
    Box,
    Button,
    Heading,
    Image,
    SimpleGrid,
    Stack,
    VStack,
} from "@chakra-ui/react";
import BannerImage from "@/images/banner.png";
import ProductCard from "@/Components/ProductCard";

const NewProductSection = function ({ products }) {
    return (
        <Stack w="full" mb={4}>
            <Heading as={"h2"} fontSize={"3xl"} mb={10} mt="10">
                Terbaru
            </Heading>
            <SimpleGrid columns={5} columnGap={4}>
                {products.map((product) => (
                    <ProductCard {...product} key={product.id} />
                ))}
            </SimpleGrid>
        </Stack>
    );
};

const AvailableProductSection = function ({ products }) {
    return (
        <Stack w="full" mb={4}>
            <Heading as={"h2"} fontSize={"3xl"} mb={10} mt="10">
                Produk Tersedia
            </Heading>
            <SimpleGrid columns={5} columnGap={4}>
                {products.map((product) => (
                    <ProductCard {...product} key={product.id} />
                ))}
            </SimpleGrid>
            <Box w={"full"} textAlign={"center"} mt="10">
                <Button
                    variant={"outline"}
                    colorScheme="twitter"
                    rounded={"none"}
                >
                    Lihat Lebih Banyak
                </Button>
            </Box>
        </Stack>
    );
};

export default function Landing({ newProducts, allProducts }) {
    return (
        <>
            <Head title="Welcome" />
            <Header />
            <VStack maxWidth={"6xl"} w={"full"} mx={"auto"} my="4" gap={4}>
                <Box>
                    <Image src={BannerImage} />
                </Box>
                <NewProductSection products={newProducts} />
                <AvailableProductSection products={allProducts} />
            </VStack>
            <Footer />
        </>
    );
}
