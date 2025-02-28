// import { get } from "../utils/request";


// export const getResultSearch= async (filter = {}) => {
//     let pathFilter = "?";
//     pathFilter += (filter.status ? `status=${filter.status}` : '');
    
//     if (pathFilter.charAt(pathFilter.length - 1) === "?"){
//         pathFilter += (filter.search ? `search=${filter.search}` : '');
//     } else
//         pathFilter += (filter.search ? `&search=${filter.search}` : '');

//     console.log(pathFilter)

//     const result = await get("home/search" + pathFilter);
//     return result;
// }

