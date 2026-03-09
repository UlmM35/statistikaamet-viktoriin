export const getMessage = (s: number, total: number): string => {
    if (s === total) {
        return "Suurepärane — kõik vastused õiged!";
    }
    if (s >= Math.ceil(total * 0.6)) {
        return "Tubli töö, aga arenemisruumi on!";
    } 
    return "Kordamine on tarkuse ema, harjuta veel!";
};
