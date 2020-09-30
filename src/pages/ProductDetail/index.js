import React, { useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
  ProductHeader,
  ProductImage,
  ProductInformation,
  ProductPricing,
} from './styles';

import Layout from '../../components/Layout';

import { formatToCurrency } from '../../utils/currency';
import api from '../../services/api';

function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState(undefined);

  const fetchProductById = useCallback(async () => {
    try {
      const response = await api.get(`/example/products/${id}`);
      setProduct(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchProductById();
  }, []);

  return (
    <Layout>
      {product && (
        <>
          <ProductHeader>
            <ProductImage src={product.photo_url} alt={product.name} />
            <ProductInformation>
              <h1>{product.name}</h1>
              <h4>Categoria</h4>
              <p>{product.category}</p>
              <h4>Descrição</h4>
              <p>{product.description}</p>
              <ProductPricing>
                <span>{formatToCurrency(product.price)}</span>
                <button type="button">Comprar</button>
              </ProductPricing>
            </ProductInformation>
          </ProductHeader>
        </>
      )}
    </Layout>
  );
}

export default ProductDetail;
