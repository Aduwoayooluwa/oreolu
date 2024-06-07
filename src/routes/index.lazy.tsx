import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: () => Index
})


export const Index = () => {
    return <div>Things on things</div>
}
