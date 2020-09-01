export const capitalize = word => (
    word.charAt(0).toUpperCase() + word.slice(1)
)


export const shopStringFormat = string => {
    if (string.includes('&')){
            
        return string.replace('&', ' & ')

    }

    if (string.includes('_')){
        return string.replace('_', ' ')
    }


    return string
} 

export const urlToCatArray = (url) => (
    url.replace('/shop/', '').split('/')
)