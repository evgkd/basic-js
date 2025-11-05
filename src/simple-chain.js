const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  _links: [],
  getLength() {
    return this._links.length;
  },
  addLink(value) {
    this._links.push(`( ${String(value)} )`);
    return this;
  },
  removeLink(position) {
    if (
      typeof position !== 'number' ||
      !Number.isInteger(position) ||
      position <= 0 ||
      position > this._links.length
    ) {
      this._links = [];
      throw new Error("You can't remove incorrect link!");
    }
    this._links.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this._links.reverse();
    return this;
  },
  finishChain() {
    const result = this._links.join('~~');
    this._links = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};
