import { SimpleGrid } from "@chakra-ui/react"
import { modulesData } from "../../helpers/dummy-modules"
import Module from "./module"

const Modules = () => {
    return (
        <SimpleGrid columns={[1, null, 3]} spacing='40px'>
            {
                modulesData.map(({title, shortDesc, imgUrl, id }) => (
                    <Module key={id} title={title} shortDesc={shortDesc} imgUrl={imgUrl} />
                ))
            }
        </SimpleGrid>

    )
}


export default Modules