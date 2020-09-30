import React, { useState, useCallback, useEffect } from 'react';
import { RiShoppingBag2Fill } from 'react-icons/ri';

import { Title, Header, List } from './styles';
import Layout from '../../components/Layout';
import ProductCard from '../../components/ProductCard';

import api from '../../services/api';

function ProductList() {
  const [products, setProducts] = useState([]);

  const fetchProducts = useCallback(async () => {
    try {
      const response = await api.get('/example/products');
      setProducts(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Layout>
      <Header>
        <RiShoppingBag2Fill size={30} />
        <h3>Bem vindo, Bruno</h3>
      </Header>
      <Title>Sua loja</Title>
      <List>
        {products.map((p) => (
          <ProductCard
            key={p.id}
            id={p.id}
            name={p.name}
            category={p.category}
            photo_url={p.photo_url}
            price={p.price}
          />
        ))}
      </List>
    </Layout>
  );
}

export default ProductList;
