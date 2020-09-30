import React, { useState, useCallback, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import {
  ProductHeader,
  ProductImage,
  ProductInformation,
  ProductPricing,
  BackButton,
} from './styles';

import Layout from '../../components/Layout';
import Loading from '../../components/Loading';

import { formatToCurrency } from '../../utils/currency';
import api from '../../services/api';

function ProductDetail() {
  const { id } = useParams();
  const history = useHistory();

  const [product, setProduct] = useState(undefined);
  const [loading, setLoading] = useState(true);

  const fetchProductById = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get(`/example/products/${id}`);
      setProduct(response.data);
    } catch (err) {
      console.tron.log(err);
    } finally {
      setLoading(false);
    }
  }, [id]);

  const handleOnClickGoBack = useCallback(() => {
    history.goBack();
  }, [history]);

  useEffect(() => {
    fetchProductById();
  }, [fetchProductById]);

  return (
    <Layout>
      {loading && <Loading />}
      {product && (
        <>
          <BackButton type="button" onClick={handleOnClickGoBack}>
            <FiArrowLeft />
            Voltar a loja
          </BackButton>
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
