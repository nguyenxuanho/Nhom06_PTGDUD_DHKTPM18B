import { useRoutes } from "react-router-dom"
import {routes} from '../../routes'
import ScrollToTop from "../scroll";
function AllRoutesClient(){
    const element = useRoutes(routes);
    return (
        <>
            <ScrollToTop />
            {element}
        </>
    )
}

export default AllRoutesClient;