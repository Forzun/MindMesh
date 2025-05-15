
export function Random(number: number){ 
    const random = "JKLFJSAFKJAKENF2324JJKLDJFLANJFAJSKQE234KDJFKASFMQ3KJDF"; 
    let ans = ""; 

    for(let i = 0; i<=number; i++){ 
        ans += random[Math.floor(Math.random() * number)]; 
    }
    return ans
}


