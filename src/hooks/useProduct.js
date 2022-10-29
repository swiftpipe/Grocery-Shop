import React, {useState} from 'react';

export const useProduct = () => {
  const [listProducts, setListProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const fetchProducts = React.useCallback(async (type, searchTerm) => {
    try {
      setLoading(true);
      // change api to search with category and search term
      const resp = await fetch(
        `/api/product?type=${type || 0}&s=${searchTerm || ''}`,
      );
      const data = await resp.json();
      setListProducts(data || []);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, []);

  const resetList = () => {
    setListProducts([]);
  };

  return [listProducts, isLoading, fetchProducts, resetList];
};
