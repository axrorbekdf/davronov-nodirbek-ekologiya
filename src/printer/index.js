import { ThermalPrinter, PrinterTypes, CharacterSet, BreakLine } from ('node-thermal-printer');

let printer = new ThermalPrinter({
    type: PrinterTypes.STAR,                                  // Printer type: 'star' or 'epson'
    interface: 'tcp://xxx.xxx.xxx.xxx',                       // Printer interface
    characterSet: CharacterSet.PC852_LATIN2,                  // Printer character set
    removeSpecialCharacters: false,                           // Removes special characters - default: false
    lineCharacter: "=",                                       // Set character for lines - default: "-"
    breakLine: BreakLine.WORD,                                // Break line after WORD or CHARACTERS. Disabled with NONE - default: WORD
    options:{                                                 // Additional options
        timeout: 5000                                           // Connection timeout (ms) [applicable only for network printers] - default: 3000
    }
});

export default printer