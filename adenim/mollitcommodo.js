// Function returning an array
function getLowIds() {
    return [42, 84];
}

// Destructuring the returned array
const [agIdLow, idLow] = getLowIds();

console.log(agIdLow); // 42
console.log(idLow);   // 84
