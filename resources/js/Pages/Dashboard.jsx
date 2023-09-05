import AdminLayout from "@/Layouts/AdminLayout";
import {
    Box,
    HStack,
    Heading,
    Image,
    SimpleGrid,
    Stack,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
import { Head } from "@inertiajs/react";
import Product1Image from "@/images/product-1.png";
import dayjs from "dayjs";

const StatisticCard = function ({ title, value }) {
    return (
        <Box rounded={"md"} px="6" py="8" bgColor={"#C2D6FF"}>
            <Text fontSize={"sm"} color={"gray.600"}>
                {title}
            </Text>
            <Text fontSize={"xl"}>{value}</Text>
        </Box>
    );
};

const NewProductList = function ({ products }) {
    return (
        <Stack bg="white" rounded="md" p="8">
            <Heading as={"h3"} fontSize={"xl"} mb="4">
                Produk Terbaru
            </Heading>
            <Table variant={"unstyled"}>
                <Thead bgColor={"blue.400"} color={"white"} rounded={"lg"}>
                    <Tr>
                        <Th width={"50%"}>Produk</Th>
                        <Th width={"25%"}>Tanggal Dibuat</Th>
                        <Th width={"25%"}>Harga (RP)</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {products.length === 0 && (
                        <Tr>
                            <Td colSpan={3} textAlign={"center"}>
                                Tidak ada produk baru.
                            </Td>
                        </Tr>
                    )}
                    {products.map((product) => {
                        const formattedPrice = new Intl.NumberFormat("id-ID", {
                            style: "currency",
                            currency: "IDR",
                            maximumFractionDigits: 0,
                        }).format(product.price);

                        return (
                            <Tr>
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
                                <Td color={"gray.500"}>
                                    {dayjs(product.created_at).format(
                                        "DD MMMM YYYY"
                                    )}
                                </Td>
                                <Td>{formattedPrice}</Td>
                            </Tr>
                        );
                    })}
                </Tbody>
            </Table>
        </Stack>
    );
};

export default function Dashboard({ stats, latestProducts }) {
    return (
        <>
            <Head title="Dashboard" />
            <AdminLayout>
                <Heading
                    as={"h2"}
                    fontSize={"2xl"}
                    fontWeight={"normal"}
                    mb="6"
                >
                    Dashboard
                </Heading>
                <SimpleGrid columns={4} columnGap={4} mb="8">
                    <StatisticCard
                        title={"Jumlah User"}
                        value={`${stats.users_count} User`}
                    />
                    <StatisticCard
                        title={"Jumlah User Aktif"}
                        value={`${stats.active_users_count} User`}
                    />
                    <StatisticCard
                        title={"Jumlah Produk"}
                        value={`${stats.products_count} Produk`}
                    />
                    <StatisticCard
                        title={"Jumlah Produk Aktif"}
                        value={`${stats.active_products_count} Produk`}
                    />
                </SimpleGrid>
                <NewProductList products={latestProducts} />
            </AdminLayout>
        </>
    );
}
