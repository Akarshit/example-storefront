/**
 * Determines if a product is on sale.
 * TODO: this is a placeholder, as we don't have "Best Seller" at this moment
 * https://github.com/mailchimp-open-commerce/example-storefront/issues/130
 *
 * @param {Object} product - The product
 * @returns {Boolean} - Indicates whether the product is on sale
 */
export default function isProductOnSale(product) {
  return product.isOnSale || false;
}
