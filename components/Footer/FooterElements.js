import styled from "styled-components";
import Link from "next/link";

export const MyFooter = styled.footer`
  background-color: #eee;
`;

export const MyFooterContainer = styled.div`
  max-width: 80%;
  margin: 0 auto;
  padding: 2em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.6;
  color: #333;
`;

export const MyFooterSocial = styled.div``;

export const MyFooterContact = styled.div`
  text-align: center;
  font-size: 0.9rem;
`;

export const MyFooterLink = styled(Link)``;

export const MyFooterCopyRight = styled.div``;
