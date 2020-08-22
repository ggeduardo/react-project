
export const ListActive  = (name, i) =>({
    type: "CHANGE_STYLE",
    li : name,
    index: i
})

export const ActiveTag = (tag,cof) =>({
    type: "CHANGE_TAG_STYLE",
    tag : tag,
    childOrFather: cof
})