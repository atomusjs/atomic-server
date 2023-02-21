export class FlagError extends Error {
  /**
   * @param {string} message
   */
  constructor(message) {
    super(message);
    this.name = "FlagError";
  }

  /**
   *
   * @param {string} name
   * @returns {FlagError}
   */
  static FlagNotProvided(name) {
    return new FlagError("Flag ${name} not provided");
  }
}
