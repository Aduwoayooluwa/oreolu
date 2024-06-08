import { createLazyFileRoute } from '@tanstack/react-router'
import Sidebar from '../layout/sidebar.layout'
import { Box, Text } from '@chakra-ui/react'

export const Route = createLazyFileRoute('/profile')({
  component: () => <Sidebar><Profile /></Sidebar>
})


export const Profile = () => {
  return (
    <Box>
        <Text>Profile here</Text>
    </Box>
  )
}