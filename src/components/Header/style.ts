import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';

export const Header = styled.header`
  height: 101px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #0F52BA;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1440px;
  padding: 0 65px;
  width: 100%
`;

export const Logo = styled.div`
  font-family: Montserrat;
  display: flex;
  color: #FFFFFF;

  strong {
    font-size: 40px; 
  }

  p {
    margin-left: 5px;
    margin-top: 15px; 
    font-size: 20px;
  }
`;

export const Cart = styled.button`
  width: 90px;
  height: 45px;
  border: none;
  border-radius: 10px;
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 18px;
    margin-left: 16px;
  }
`;

export const Icon = styled(FaShoppingCart)`
  font-size: 18px;
  color: #000000 ;
`;