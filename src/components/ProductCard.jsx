import React from "react";

const styles = {
  card: `
    bg-black text-white
    rounded-2xl
    overflow-hidden
    border border-gray-800
    shadow-lg shadow-black/40
    transition-all duration-500 ease-out
    hover:scale-105
    hover:shadow-2xl hover:shadow-gray-900/80
    cursor-pointer
    group
  `,

  imageContainer: `
    bg-gray-900
    overflow-hidden
  `,

  image: `
    w-full h-60 object-cover
    transition-transform duration-700 ease-out
    group-hover:scale-110
  `,

  content: `
    p-5 flex flex-col gap-3
  `,

  title: `
    text-lg font-semibold
    text-white
    transition-colors duration-300
    group-hover:text-gray-300
  `,

  description: `
    text-gray-400 text-sm
    line-clamp-2
  `,

  priceRow: `
    flex justify-between items-center mt-2
  `,

  price: `
    text-xl font-bold text-white
  `,

  button: `
    bg-white text-black
    px-4 py-2
    rounded-lg
    font-medium
    transition-all duration-300
    hover:bg-gray-200
    hover:scale-105
    active:scale-95
  `
};


const ProductCard = ({
  title,
  description,
  price,
  image,
  onAddToCart
}) => {

  return (
    <div className={styles.card}>

      <div className={styles.imageContainer}>
        <img
          src={image}
          alt={title}
          className={styles.image}
        />
      </div>

      <div className={styles.content}>

        <h2 className={styles.title}>
          {title}
        </h2>

        <p className={styles.description}>
          {description}
        </p>

        <div className={styles.priceRow}>

          <span className={styles.price}>
            ₹{price}
          </span>

          <button
            className={styles.button}
            onClick={onAddToCart}
          >
            Add
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProductCard;
