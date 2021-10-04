import { DISPLAY_LOADER, MASK_LOADER } from "../type";

// this action display the loader modal
const displayLoader = () => {
    return {
        type: DISPLAY_LOADER
    }
}

const maskLoader = () => {
    return {
        type: MASK_LOADER
    }
}

export { displayLoader, maskLoader }