import { createLazyFileRoute } from '@tanstack/react-router'
import Modules from '../components/modules/modules'
import Sidebar from '../layout/sidebar.layout'

export const Route = createLazyFileRoute('/modules')({
  component: () => <Sidebar> <Modules /> </Sidebar>
})