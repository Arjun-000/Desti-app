import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"

// save destination
export const saveDestinationAPI = async(destinationDetails)=>{
    return await commonAPI('POST',`${SERVERURL}/destination`,destinationDetails)
}

// get destination
export const getDestinationAPI = async()=>{
    return await commonAPI('GET',`${SERVERURL}/destination`,"")
}

// get destination by id for view
export const getDestinationByIdAPI = async (id) => {
    return await commonAPI('GET', `${SERVERURL}/destination/${id}`, "");
}

// delete destination from view
export const deleteDestinationAPI = async (id) => {
    return await commonAPI('DELETE', `${SERVERURL}/destination/${id}`, {})
}

// add destination to wishlist
export const addToWishlistAPI = async (destination) => {
    return await commonAPI("POST", `${SERVERURL}/wishlist`, destination);
  };

// get destination in wishlist
export const getDestinationInWishlistAPI = async () => {
    return await commonAPI('GET', `${SERVERURL}/wishlist`, "");
  };

// add destination to visited
export const addDestinationToVisitedAPI = async (destination) => {
    return await commonAPI("POST", `${SERVERURL}/visited`, destination);
  };
  

// get destination in visited
export const getDestinationInVisitedAPI = async () => {
    return await commonAPI('GET', `${SERVERURL}/visited`, "");
}

// get destination in wishlist using id

export const getDestinationByIdWishlistAPI = async (id) => {
    return await commonAPI('GET', `${SERVERURL}/wishlist/${id}`, "");
}

// get destination in visited using id
export const getDestinationByIdVisitedAPI = async (id) => {
    return await commonAPI('GET', `${SERVERURL}/visited/${id}`, "");
}

// delete from visited as well as add back to destination
export const deleteDestinationFromVisitedAPI = async (destination) => {
    await commonAPI("DELETE", `${SERVERURL}/visited/${destination.id}`, {});
    return await commonAPI("POST", `${SERVERURL}/destination`, destination);
  };

// delete from wishlist as well as add back to destination
export const deleteDestinationFromWishlistAPI = async (destinationDetails) => {
    await commonAPI("DELETE", `${SERVERURL}/wishlist/${destinationDetails.id}`, {});
    return await commonAPI('POST',`${SERVERURL}/destination`,destinationDetails)
}

// delete from wishlist as well as add to visited
export const deleteDestinationFromWishlistToAddVisitedAPI = async (destination) => {
    await commonAPI("DELETE", `${SERVERURL}/wishlist/${destination.id}`, {});
    return await commonAPI("POST", `${SERVERURL}/visited`, destination);
  };

// 
export const deleteDestinationFromVisitedToAddWishlistAPI = async (destination) => {
    await commonAPI("DELETE", `${SERVERURL}/visited/${destination.id}`, {});
    return await commonAPI("POST", `${SERVERURL}/wishlist`, destination);
}