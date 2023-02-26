/** @constructor */
export class StringReplacer {
  /**
   * @type {string}
   * @private
   */
  target;

  /** @param {string} target */
  constructor(target) {
    this.target = target;
  }

  /**
   * @param {string | RegExp} before
   * @param {string | RegExp} after
   */
  replace(before, after) {
    this.target = this.target.replace(before, after);
  }

  toString() {
    return this.target;
  }
}
