import React from 'react';

export const useCategory = () => {
  const [categoryList, setCategoryList] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const resp = await fetch('/api/category');
      const data = await resp.json();
      setCategoryList(data);
    })();
  }, []);

  return categoryList;
};
