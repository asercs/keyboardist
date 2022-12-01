import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import Select from 'react-select';

type Product = {
  id: number;
  name: string;
  price: number;
  brand: string;
  quantity: number;
  description: string;
  images: string[];
  product_type: string;
  order: number;
};

const Shop = () => {
  const [products, setProducts] = React.useState<Product[]>([]);
  useEffect(() => {
    fetch('http://localhost:8000/getAllItems')
      .then((res) => res.json())
      .then((data: Product[]) => setProducts(data));
  }, []);

  const options = [
    { value: 'aser', label: 'aser' },
    { value: 'apple', label: 'apple' },
  ];
  return (
    <div className="w-full max-w-[1240px] mx-auto px-4 xl:px-0 py-4">
      <div className="text-white">
        <h1 className="font-extrabold text-4xl text-center mb-10">Shop</h1>

        <div className="flex gap-4 text-lg font-bold justify-between">
          <div id="filters" className="flex gap-4 flex-wrap">
            <div className="item">
              <Select
                options={options}
                isMulti
                placeholder="Brand"
                className="text-black"
                theme={(theme) => ({
                  ...theme,
                  colors: {
                    ...theme.colors,
                    neutral0: '#4B5563',
                    primary25: 'hotpink',
                    primary: 'black',
                  },
                })}
              />
            </div>
          </div>
          <div id="sort">
            <select className="px-4 py-3 w-full bg-gray-600 rounded-md border-transparent focus:border-gray-500 focus:ring-0 text-md w-48">
              <option value="">For what</option>
              <option value="for-rent">For Rent</option>
              <option value="for-sale">For Sale</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 my-10 pb-96">
        <Link to="/product">
          <div className="bg-gray-600/40 rounded-md p-5 text-white flex flex-col justify-center items-center">
            <div className="mb-4">
              <img
                src="https://cdn.shopify.com/s/files/1/1473/3902/products/0_96b338f0-446d-43ed-83a0-7a26c5d3dead_900x.jpg?v=1665646319"
                alt="arrival"
                className="h-64 object-contain"
              />
            </div>
            <div>
              <h1 className="font-extrabold mb-2">Luna 80</h1>
              <h2 className="font-bold">499 $</h2>
            </div>
          </div>
        </Link>

        {products.map((product: Product) => (
          <Link to={`/product/${product.order}`}>
            <div className="bg-gray-600/40 rounded-md p-5 text-white flex flex-col justify-center items-center">
              <div className="mb-4">
                <img src={product.images[0]} alt="arrival" className="h-64 object-contain" />
              </div>
              <div>
                <h1 className="font-extrabold mb-2">{product.name}</h1>
                <h2 className="font-bold">{product.price} $</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export { Shop };
