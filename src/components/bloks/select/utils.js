export const normalizeOptions = (items, key, value) => {
    let res = []
    items.map(item =>
    {
        res.push({
            key : item[key],
            value : item[value],
        })
    })
    return res
}
