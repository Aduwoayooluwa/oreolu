import { ButtonGroup, Button as Btn } from "@chakra-ui/react"

export const Button = ({ children}: {
    children: React.ReactNode
}) => {
    return (
        <ButtonGroup>
            <Btn colorScheme="teal" >
                {children }
            </Btn>
        </ButtonGroup>
    )
}