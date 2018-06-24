/*
    Implement an algorithm to determine if a string has all unique characters.
    What if you cannot use additional data structures.
*/
 console.log('start')
 console.log('begin')
// O(N^2)
function containUniqueChar(input) {
    
    let isUnique = true;

    // O(n^2)
    for(let i = 0; i < input.length; i++)
    {
        for(let j = i+1; j < input.length; j++)
        {
            if(input[i] === input[j])
            {
                isUnique = false;
            }
        }
    }
    return isUnique
}

// If the string is an ASCII string
// T.Complexity: O(input.length)
// S.Complexity: O(1) i.e. charset[256]
function containUniqueChar1(input) {
    if(input.length > 128) return false // 65536 for Unicode string
    
    let charSet = new Array(256).fill(false)

    for(let i = 0; i< input.length; i++) {
        if(charSet[input[i]]) {
            return false
        }
        charSet[input[i]] = true
    }
    
    return true
}

/*
    Assuming that string only contains lower case characters from a to z
    T.C: O(n)
    S.C: O(1) using bit vector
*/
function containUniqueChar2(input) {
    
    let set = 0;
    
    for(let i = 0; i < input.length; i++)
    {
        let val = input.charCodeAt(i) - 'a'.charCodeAt(0);
        console.log(val);
        if( (set & (1<<val)) > 0) return false
        
        set |= (1<<val)
    }

    return true
}

var stdin = process.openStdin();
 
stdin.addListener("data", function(d) {
 
    const input = d.toString()    
    
    let isUnique = containUniqueChar2(input.toLowerCase())
    
    if(isUnique) {
        console.log('All Characters are Unique.')
    } else {
        console.log('String contain duplicate characters.')
    }

    process.exit()
});