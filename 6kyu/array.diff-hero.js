// ❓Description:


//Tests:

// ✅Solution:

function arrayDiffVeryFast(a, b) {
    if(a.length === 0 || b.length === 0) return a
    b =  Array.from(new Set(b))
    let result =  [...a]
    for (const el of b) {
        result = result.filter(element => element !==el)
    }
    return result
}
