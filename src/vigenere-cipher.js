const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }
  encrypt(message, key) {
    return this.#process(message, key, true);
  }
  decrypt(message, key) {
    return this.#process(message, key, false);
  }
  #process(message, key, isEncrypt) {
    const msg = String(message).toUpperCase();
    const k = String(key).toUpperCase();
    let res = [];
    let ki = 0;
    for (let i = 0; i < msg.length; i++) {
      const ch = msg[i];
      if (ch >= 'A' && ch <= 'Z') {
        const m = ch.charCodeAt(0) - 65;
        const kch = k[ki % k.length];
        const kidx = kch.charCodeAt(0) - 65;
        const outIdx = isEncrypt ? (m + kidx) % 26 : (m - kidx + 26) % 26;
        res.push(String.fromCharCode(outIdx + 65));
        ki++;
      } else {
        res.push(ch);
      }
    }
    const out = res.join('');
    return this.direct ? out : out.split('').reverse().join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
