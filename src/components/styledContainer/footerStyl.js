import styled from "styled-components";
import {mobile} from "../../responsive";

export const Container = styled.div`
  display: flex;
  ${mobile({flexDirection:"column"})}
`;
export const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;

`;
export const Center = styled.div`
  flex: 1;
  ${mobile({ display: "none" })}
`;
export const Right = styled.div`
  flex: 1;
  ${mobile({ backgroundColor: "#fff8f8" ,marginLeft:'20px'})}
`;
export const SocialContainer = styled.div`
  display: flex;


`;
export const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;
export const Desc = styled.p`
  margin: 20px 0;

`;
export const Logo = styled.h1`

`;
export const Title = styled.h3`
  margin-bottom: 30px;
`;
export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
export const ListItem = styled.li`
  width: 50%;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;
export const ContactItem = styled.div`
   margin-bottom: 20px;
  display: flex;
  align-items: center;
  font-weight: bold;
`;

export const Payment = styled.img`
  width: 50%;
`;


