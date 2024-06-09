import { HStack, Box, VStack, Text, Image } from "@chakra-ui/react"
import { Logo } from "../components/logo"
import { SidebarItems } from "./sidebar-items.layout"
import { SidebarItemComponent } from "../types/layout.types"
import { Link } from "@tanstack/react-router"
// import { Button } from "../components/button"


const ItemComponent = ({ item }: SidebarItemComponent) => {
    return (
        <Box>
            <Link to={item.link}>
                <HStack p={2} w="150px" spacing={6} _hover={{ bg: "blue.100" }}>
                    <Image width={"20px"} height={"20px"} alt={`${item.name}_icon`} src={item.icon} />
                    <Text _hover={{ textColor: "#0077CC" }} textColor={"#092240"} fontWeight="medium" fontSize="sm">{item?.name}</Text>
                </HStack>
            </Link>
        </Box>

    )
}

const Sidebar = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <HStack width="full" alignItems="start">
            <VStack alignItems={"start"} display={{ base: "none", md: "block" }} spacing={8} height="100vh" w="20%" bg="white" p={4}>
                <header>
                    <Logo />
                </header>
                <VStack spacing={3} alignItems={"start"} mt={5}>
                    {
                        SidebarItems.map((item) => (
                            <ItemComponent item={item} key={item?.name} />
                        ))
                    }
                </VStack>

            </VStack>
            <Box minH="100vh" p={6} w="100%" bg="gray.100">
                {/* <Button>Hello world</Button> */}
                {children}
            </Box>
        </HStack>
    )
}

export default Sidebar