import { useMemo, useState } from "react";
import {
  useGetCategoriesQuery,
  useGetProductsByCategoryQuery,
  useGetProductsQuery,
} from "../features/products/productApi";
import ProductCard from "../components/ProductCard";

const ProductsPage = () => {
  // const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((data) => setData(data))
  //     .catch((error) => setError(error))
  //     .finally(() => setIsLoading(false));
  // }, []);

  // useEffect(() => {
  //   axios
  //     .get("https://fakestoreapi.com/products")
  //     .then((res) => setData(res.data))
  //     .catch((error) => setError(error))
  //     .finally(() => setIsLoading(false));
  // }, []);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const {
    data: allProducts,
    isLoading: productsLoading,
    error: productsError,
  } = useGetProductsQuery();

  console.log("allProducts", allProducts);

  const { data: categories } = useGetCategoriesQuery();

  console.log("categories", categories);

  const { data: productsByCategory } = useGetProductsByCategoryQuery(
    selectedCategory as string,
    { skip: !selectedCategory },
  );

  console.log("productsByCategory", productsByCategory);

  const productsToDisplay = selectedCategory ? productsByCategory : allProducts;

  // const { cart } = useSelector((state) => state.cart);

  const filteredProducts = useMemo(() => {
    if (!productsToDisplay) return [];
    return productsToDisplay?.filter((product) =>
      product?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()),
    );
  }, [productsToDisplay, searchQuery]);
  console.log("filteredProducts", filteredProducts);

  if (productsLoading) {
    return <div>Loading...</div>;
  }

  if (productsError) {
    return <div>Error: {(productsError as Error).message}</div>;
  }

  return (
    <>
      <div className="search-container mb-4 w-50 mx-auto d-flex gap-2 align-items-center">
        <label htmlFor="search" className="form-label">
          Search
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="products-page">
        {/* Category Filter */}
        <div className="category-filter">
          <button
            className={!selectedCategory ? "cat-btn active" : "cat-btn"}
            onClick={() => setSelectedCategory(null)}
          >
            All
          </button>

          {categories?.map((cat) => (
            <button
              key={cat}
              className={
                selectedCategory === cat ? "cat-btn active" : "cat-btn"
              }
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
