export function prepareVariantsWithOptions(
  variants
  // variants: Readonly<ShopifyBuy.ProductVariant[]>
) {
  return variants.map((variant) => {
    // TODO: look into types, prob need update in @types/shopify-buy
    // convert the options to a dictionary instead of an array
    const optionsDictionary = variant.selectedOptions?.reduce(
      (options, option) => {
        options[`${option?.name?.toLowerCase()}`] = option?.value;
        return options;
      },
      {}
    );

    // return an object with all of the variant properties + the options at the top level
    return {
      ...optionsDictionary,
      ...variant,
    };
  });
}

export function prepareVariantsImages(
  variants,
  // variants: Readonly<GatsbyTypes.ShopifyProductVariant[]>,
  optionKey
) {
  // Go through the variants and reduce them into non-redundant
  // images by optionKey. Output looks like this:
  // {
  //   [optionKey]: image
  // }
  const imageDictionary = variants.reduce((images, variant) => {
    if (variant[optionKey]) {
      images[variant[optionKey]] = variant.image;
    }
    return images;
  }, {});

  // prepare an array of image objects that include both the image
  // and the optionkey value.
  const images = Object.keys(imageDictionary).map((key) => {
    return {
      [optionKey]: key,
      src: imageDictionary[key],
    };
  });

  return images;
}

export const getPrice = (price, currency) =>
  Intl.NumberFormat(undefined, {
    currency,
    minimumFractionDigits: 2,
    style: "currency",
  }).format(parseFloat(price ? price : "0"));
