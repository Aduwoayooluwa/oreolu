import { HStack, Image, Text } from "@chakra-ui/react"
import LogoLight from "../assets/images/logo_light.png"
export const Logo = () => {
    return (
        <div>
            <HStack  gap={2}>
                <Image width={"40px"} height={"50px"} src={LogoLight} alt="Light Logo" />
                <Text size="sm" fontWeight={"semibold"}>OrelOlu</Text>
            </HStack>
        </div>
    )
}