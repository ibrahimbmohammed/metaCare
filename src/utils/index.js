
export const allCharHieghts = (items) => {
    let total = items.reduce((sum, currentValue) => {
        return (currentValue.height === 'unknown') ? sum : sum + parseInt(currentValue.height);

    }, 0);
    return total;
}

export const converter = (cm) => {
    const ft = 30.48;
    const inch = 2.54;
    const ftValue = (cm / ft).toFixed(2);
    const inchValue = (cm / inch).toFixed(2);
    return `${cm}cm (${ftValue}ft/${inchValue}in)`;
}


export const genData = (data) => {
    if (!data) return null;
    const genderSet = new Set()
    data?.map((item) => {
        return genderSet.add(item?.gender)
    })
    return [...genderSet]
}

export const promiseApiCall = async (endpoint, setCharError) => {
    setCharError(false)
    try {
        const res = await fetch(endpoint);
        const result = res.json();
        return result;
    } catch ({ message }) {
        setCharError(true)
        return message;
    }
}