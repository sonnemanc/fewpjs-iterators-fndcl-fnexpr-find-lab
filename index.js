function superbowlWin(a) {
    let result = a.find( a => a.result === 'W')
    return !!result ? result.year : undefined    // IF result is truthy, THEN return result.year ELSE return undefined
}