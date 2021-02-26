/**
 * Encode a provided id and namespace
 *
 * @param {String} id - An id to base64 encode
 * @param {String} namespace - A Mailchimp Open Commerce namespace i.e. moc/order
 * @returns {String} - A base64 encoded id
 */
export function base64EncodeId(id, namespace) {
  if (id === undefined || namespace === null) return null;
  const buffer = new Buffer(`${namespace}:${id}`);
  return buffer.toString("base64");
}
