export const prettifyNumber = (number, decimals = 1) => { 
    const digits = number.toString().length;
    if (digits < 4) return number.toString();
    else if (digits < 7) return (number / 1000).toFixed(decimals) + 'k';
    else return (number / 1000000).toFixed(decimals) + 'M';

}