module.exports = function makeExchange(currency) {
    mincoins = {};
    if (currency > 10000) {
        mincoins['error'] = "You are rich, my friend! We don't have so much coins for exchange";
    } else if (currency > 0) {
        find('H', 50);
        find('Q', 25);
        find('D', 10);
        find('N', 5);
        find('P', 1);
    };
    return mincoins; 
    function find(nominal, value) {
        let tempvalue = Math.floor(currency / value); 
        if (tempvalue > 0) {
            mincoins[nominal] = tempvalue;
            currency = currency % value;
        }
    }    
}
