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
import Product1Image from "@/images/product-1.png";
import Product2Image from "@/images/product-2.png";
import ProductCard from "@/Components/ProductCard";

const products = [
    {
        id: 1,
        name: "Eudora",
        price: 200000,
        photo: Product1Image,
    },
    {
        id: 2,
        name: "Eudore",
        price: 200000,
        photo: Product2Image,
    },
    {
        id: 3,
        name: "Eudoru",
        price: 200000,
        photo: Product1Image,
    },
    {
        id: 4,
        name: "Eudori",
        price: 200000,
        photo: Product2Image,
    },
    {
        id: 5,
        name: "Eudoro",
        price: 200000,
        photo: Product2Image,
    },
];

const NewProductSection = function () {
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

const AvailableProductSection = function () {
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

export default function Landing() {
    return (
        <>
            <Head title="Welcome" />
            <Header />
            <VStack maxWidth={"6xl"} w={"full"} mx={"auto"} my="4" gap={4}>
                <Box>
                    <Image src={BannerImage} />
                </Box>
                <NewProductSection />
                <AvailableProductSection />
            </VStack>
            <Footer />
        </>
    );
}
