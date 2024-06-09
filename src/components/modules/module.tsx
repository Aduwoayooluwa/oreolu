import { Box, Image, Text, VStack } from "@chakra-ui/react";
import { ModuleTypes } from "../../types/modules.types";
import { AnimatePresence } from "framer-motion";

const Module = ({ title, shortDesc, imgUrl }: ModuleTypes) => {
    return (
        <AnimatePresence>
        <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md" 
            _hover={{ boxShadow: "lg" }} 
        >
            <Image src={imgUrl} alt={`Image of ${title}`} />

            <VStack
                p={4}
                align="start"
                spacing={2} 
            >
                <Text fontWeight="bold" fontSize="md">
                    {title}
                </Text>
                <Text fontSize="sm" color="gray.600">
                    {shortDesc}
                </Text>
            </VStack>
        </Box>
        </AnimatePresence>
    );
}

export default Module;
