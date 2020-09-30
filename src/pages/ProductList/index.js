import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RiShoppingBag2Fill } from 'react-icons/ri';

import { fetchProducts } from '../../store/modules/products/actions';
import { formatToCurrency } from '../../utils/currency';

import { Title, Header, List } from './styles';
import Layout from '../../components/Layout';
import ProductCard from '../../components/ProductCard';
import Loading from '../../components/Loading';

function ProductList() {
  const loading = useSelector((state) => state.products.loading);
  const products = useSelector((state) => state.products.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Layout>
      <Header>
        <RiShoppingBag2Fill size={30} />
        <h3>Bem vindo, Bruno</h3>
      </Header>
      <Title>Sua loja</Title>
      {loading && <Loading />}
      <List>
        {products.map((p) => (
          <ProductCard
            key={p.id}
            id={p.id}
            name={p.name}
            category={p.category}
            photo_url={p.photo_url}
            price={formatToCurrency(p.price)}
          />
        ))}
      </List>
    </Layout>
  );
}

export default ProductList;
