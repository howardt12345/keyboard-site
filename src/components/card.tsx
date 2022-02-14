import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { theme } from '@styles';

const { fonts } = theme;

const StyledCard = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.textSecondary};
  border-radius: 0.5rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled.h4`
  text-align: center;
  font-family: ${fonts.Poppins};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export interface ICardProps {
  title: string;
  src: string;
  path: string;
}

const Card = (props: ICardProps) => {
  return (
    <StyledCard>
      <Link href={props.path}>
        <a>
          <Image
            src={props.src}
            alt={props.title}
            width='600'
            height='400'
          ></Image>
          <StyledTitle>{props.title}</StyledTitle>
        </a>
      </Link>
    </StyledCard>
  );
};

export default Card;
