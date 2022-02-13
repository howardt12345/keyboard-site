import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

export interface ICardProps {
  title: string;
  src: string;
  path: string;
}

const Card = (props: ICardProps) => {
  return (
    <div>
      <Link href={props.path}>
        <a>
          <Image
            src={props.src}
            alt={props.title}
            width='300'
            height='200'
          ></Image>
          <h3>{props.title}</h3>
        </a>
      </Link>
    </div>
  );
};

export default Card;
