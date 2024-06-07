import { Box } from '@chakra-ui/react'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: () => <Index />
})


export const Index = () => {
    return <Box className="bg-red-900">Things on things</Box>
}
