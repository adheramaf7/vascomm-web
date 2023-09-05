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

const NewProductList = function () {
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
                    <Tr>
                        <Td>
                            <HStack>
                                <Image src={Product1Image} width={10} mr="4" />
                                <Text>Perfume Eudora</Text>
                            </HStack>
                        </Td>
                        <Td color={"gray.500"}>12 Agustus 2023</Td>
                        <Td>Rp 12.000</Td>
                    </Tr>
                </Tbody>
            </Table>
        </Stack>
    );
};

export default function Dashboard({ auth }) {
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
                    <StatisticCard title={"Jumlah User"} value={"150 User"} />
                    <StatisticCard
                        title={"Jumlah User Aktif"}
                        value={"150 User"}
                    />
                    <StatisticCard
                        title={"Jumlah Produk"}
                        value={"150 Produk"}
                    />
                    <StatisticCard
                        title={"Jumlah Produk Aktif"}
                        value={"150 Produk"}
                    />
                </SimpleGrid>
                <NewProductList />
            </AdminLayout>
        </>
    );
}
