import React from "react";
import ProductCard from "./ProductCard";

const styles = {

  container: `
    bg-black
    min-h-screen
    w-full
    px-8 py-10
  `,

  header: `
    text-white
    text-3xl
    font-bold
    mb-10
    text-center
  `,

  list: `
    flex
    flex-wrap
    justify-center
    gap-8
  `,

  cardWrapper: `
    w-[300px]
    transition-all duration-300
    hover:scale-[1.02]
  `,

  empty: `
    text-gray-400
    text-lg
    text-center
    mt-20
  `

};


const defaultProducts = [
  {
    id: 1,
    title: "Wireless Headphones",
    description: "Premium noise cancelling wireless headphones.",
    price: 2999,
    image:
      "https://images.unsplash.com/photo-1518441902117-b8f9c0b5c6b3?w=800"
  },
  {
    id: 2,
    title: "Mechanical Keyboard",
    description: "RGB mechanical keyboard with tactile switches.",
    price: 4999,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800"
  },
  {
    id: 3,
    title: "Gaming Mouse",
    description: "High precision gaming mouse.",
    price: 1999,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=800"
  },
  {
    id: 4,
    title: "Smart Watch",
    description: "Track fitness, heart rate and notifications.",
    price: 6999,
    image:
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800"
  }
];


const ProductList = ({
  products = defaultProducts,
  title = "Featured Products"
}) => {

  return (

    <div className={styles.container}>

      <h1 className={styles.header}>
        {title}
      </h1>

      {products.length === 0 ? (

        <div className={styles.empty}>
          No products available
        </div>

      ) : (

        <div className={styles.list}>

          {products.map((product) => (

            <div
              key={product.id}
              className={styles.cardWrapper}
            >

              <ProductCard
                title={product.title}
                description={product.description}
                price={product.price}
                image={product.image}
                onAddToCart={() =>
                  console.log(`${product.title} added to cart`)
                }
              />

            </div>

          ))}

        </div>

      )}

    </div>

  );

};


export default ProductList;
