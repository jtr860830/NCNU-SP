export class OpTable {
  /**
   * @type {Map<string, number>}
   */
  #table;

  constructor() {
    this.#table = new Map([
      ["ADD", 0x18],
      ["ADDF", 0x58],
      ["ADDR", 0x90],
      ["AND", 0x40],
      ["CLEAR", 0xb4],
      ["COMP", 0x28],
      ["COMPF", 0x88],
      ["COMPR", 0xa0],
      ["DIV", 0x24],
      ["DIVF", 0x64],
      ["DIVR", 0x9c],
      ["FIX", 0xc4],
      ["FLOAT", 0xc0],
      ["HIO", 0xf4],
      ["J", 0x3c],
      ["JEQ", 0x30],
      ["JGT", 0x34],
      ["JLT", 0x38],
      ["JSUB", 0x48],
      ["LDA", 0x00],
      ["LDB", 0x68],
      ["LDCH", 0x50],
      ["LDF", 0x70],
      ["LDL", 0x08],
      ["LDS", 0x6c],
      ["LDT", 0x74],
      ["LDX", 0x04],
      ["LPS", 0xd0],
      ["MUL", 0x20],
      ["MULF", 0x60],
      ["MULR", 0x98],
      ["NORM", 0xc8],
      ["OR", 0x44],
      ["RD", 0xd8],
      ["RMO", 0xac],
      ["RSUB", 0x4c],
      ["SHIFTL", 0xa4],
      ["SHIFTR", 0xa8],
      ["SIO", 0xf0],
      ["SSK", 0xec],
      ["STA", 0x0c],
      ["STB", 0x78],
      ["STCH", 0x54],
      ["STF", 0x80],
      ["STI", 0xd4],
      ["STL", 0x14],
      ["STS", 0x7c],
      ["STSW", 0xe8],
      ["STT", 0x84],
      ["STX", 0x10],
      ["SUB", 0x1c],
      ["SUBF", 0x5c],
      ["SUBR", 0x94],
      ["SVC", 0xb0],
      ["TD", 0xe0],
      ["TIO", 0xf8],
      ["TIX", 0x2c],
      ["TIXR", 0xb8],
      ["WD", 0xdc],
    ]);
  }

  /**
   * @param {string} mnemonic
   * @returns {number | undefined}
   */
  find(mnemonic) {
    return this.#table.get(mnemonic);
  }
}

export default OpTable;
