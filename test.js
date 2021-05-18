n = "16.009";
nf = parseFloat(n);
ni = parseInt(n);

if (nf == ni) console.log("==");
if (nf === ni)console.log("===");

console.log(nf, ni, typeof nf, typeof ni);