import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const styles = {

  container: `
    bg-black min-h-screen w-full px-8 py-10
  `,

  header: `
    text-white text-3xl font-bold mb-10 text-center
  `,

  list: `
    flex flex-wrap justify-center gap-8
  `,

  cardWrapper: `
    w-[300px]
    transition-all duration-300
    hover:scale-[1.02]
  `,

  empty: `
    text-gray-400 text-lg text-center mt-20
  `
};


const ProductList = ({
  title = "Featured Products"
}) => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    fetch("https://dummyjson.com/products")

      .then(res => res.json())

      .then(res => {
        setProducts(res.products);
      })

      .catch(e => {
        console.log(e);
      })

      .finally(() => {
        setLoading(false); 
      });

  }, []);



  return (

    <div className={styles.container}>

      <h1 className={styles.header}>
        {title}
      </h1>


      {loading ? (

        <div className={styles.empty}>
          Loading...
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
                image={product.thumbnail} 
                onAddToCart={() =>
                  console.log(`${product.title} added`)
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
