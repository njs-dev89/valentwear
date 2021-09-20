import { useContext, useEffect, useMemo, useState } from "react";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import OptionPicker from "../../components/OptionPicker";
import { UIContext } from "../../context/uiContext";
import { useAddItemToCart } from "../../customHooks/cartHooks";
import {
  prepareVariantsImages,
  prepareVariantsWithOptions,
} from "../../utils/helpers";
import { getProductByHandle } from "../../utils/operations";

function SingleProduct({ product }) {
  const { openCartDrawer, displayCartDrawer } = useContext(UIContext);
  const [loading, setLoading] = useState(false);
  const addItem = useAddItemToCart();

  const colors = product?.options
    ?.find((option) => option?.name?.toLowerCase() === "color")
    ?.values?.map((op) => op.value);

  const sizes = product?.options
    ?.find((option) => option?.name?.toLowerCase() === "size")
    ?.values?.map((op) => op.value);

  const variants = useMemo(
    () => prepareVariantsWithOptions(product?.variants),
    [product?.variants]
  );

  const images = useMemo(
    () => prepareVariantsImages(variants, "color"),
    [variants]
  );

  const [variant, setVariant] = useState(variants[0] || {});
  const [color, setColor] = useState(variant.color);
  const [size, setSize] = useState(variant.size);

  useEffect(() => {
    const newVariant = variants.find((variant) => {
      return (
        (variant.size === size || !size) && (variant.color === color || !color)
      );
    });

    if (variant.id !== newVariant?.id) {
      setVariant(newVariant);
    }
  }, [size, color, variants, variant.id]);

  const addToCart = async () => {
    setLoading(true);
    try {
      await addItem(variant.id, 1);
      openCartDrawer();
      setLoading(false);
    } catch (err) {
      console.log({ variant: variant.id, err });
      setLoading(false);
    }
  };

  const allImages = images
    .map(({ src }) => ({ src: src.src }))
    .concat(
      product.images &&
        product.images.filter(
          ({ src }) => !images.find((image) => image.src.src === src)
        )
    );

  return (
    <div className="grid md:grid-cols-3 gap-16">
      <div className="md:col-span-2">
        <ImageCarousel
          showZoom
          alt={product.title}
          priority
          // onThumbnailClick={(index) => {
          //   if (images[index]?.color) {
          //     setColor(images[index].color);
          //   }
          // }}
          images={
            allImages?.length > 0
              ? allImages
              : [
                  {
                    src: `https://via.placeholder.com/1050x1050`,
                  },
                ]
          }
        />
      </div>
      <div className="col-span-1">
        <h1 className="text-2xl font-medium">{product.title}</h1>
        <p className="mt-2">${variant.priceV2.amount}</p>
        {colors?.length && (
          <OptionPicker
            key="Color"
            name="Color"
            options={colors}
            selected={color}
            onChange={(event) => setColor(event.target.value)}
          />
        )}
        {sizes?.length && (
          <div className="">
            <OptionPicker
              key="Size"
              name="Size"
              label="Select size"
              options={sizes}
              selected={size}
              onChange={(event) => setSize(event.target.value)}
            />
            <p className="text-sm">Sizing guide in the description below </p>
          </div>
        )}
        <button
          name="add-to-cart"
          disabled={loading}
          className="w-full py-3 block bg-black text-white my-8 disabled:opacity-50"
          onClick={addToCart}
        >
          Add to Cart
        </button>
        <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
      </div>
    </div>
  );
}

export default SingleProduct;

export const getServerSideProps = async (context) => {
  const product = await getProductByHandle(context.query.handle);
  return {
    props: {
      product,
    },
  };
};
