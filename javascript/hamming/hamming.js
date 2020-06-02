export const compute = (str1, str2) => {
    if (str1 === '' && str2 !== '')
        throw "left strand must not be empty";
    if (str2 === '' && str1 !== '')
        throw "right strand must not be empty";
    if (str1.length !== str2.length)
        throw "left and right strands must be of equal length";
    let count = 0;
    for (let i = 0; i < str1.length; i++){
        if (str1.charAt([i]) !== str2.charAt([i]))
            count++;
    }
    return count;
};
