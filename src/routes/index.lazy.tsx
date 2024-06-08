import { Box } from '@chakra-ui/react'
import { createLazyFileRoute } from '@tanstack/react-router'
import Sidebar from '../layout/sidebar.layout'

export const Route = createLazyFileRoute('/')({
    component: () => <Index />
})


export const Index = () => {
    return <Box className="">
        <Sidebar>
            <div></div>
        </Sidebar>
    </Box>
}
