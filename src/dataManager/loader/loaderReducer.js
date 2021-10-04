import { DISPLAY_LOADER, MASK_LOADER } from "../type";

// this fontion handle all actions about loading modal
const loaderReducer = (state=false, action) => {
    switch(action.type){
        case DISPLAY_LOADER:
            return state
        case MASK_LOADER:
            return false
        default:
            return false
    }
}

export default loaderReducer