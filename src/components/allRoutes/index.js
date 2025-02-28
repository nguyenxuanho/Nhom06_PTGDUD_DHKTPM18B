import { useRoutes } from "react-router-dom"
import {routes} from '../../routes'
function AllRoutesClient(){
    const element = useRoutes(routes);
    return (
        <>
            {element}
        </>
    )
}

export default AllRoutesClient;