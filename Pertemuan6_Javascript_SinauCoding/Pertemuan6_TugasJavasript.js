let jumlahBus = 10;
let busBeroperasi = 6;

for(let noBus = 1; noBus <= jumlahBus; noBus++) {
    if(noBus <= busBeroperasi) {
        console.log('Bus Transjakarta ' + noBus + ' beroperasi dengan baik.');
    } else if(noBus === 8) {
        console.log('Bus Transjakarta. ' + noBus + ' sedang lembur.');
    } else {
        console.log('Bus Transjakarta. ' + noBus + ' sedang tidak beroperasi.');
    }
}