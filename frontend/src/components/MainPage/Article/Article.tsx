import { Types } from '../../../types/app';

import {
  Description,
  Title,
  Container,
  Link,
} from './styled';

type Props = {
  article: Types.Article;
}

export const Article = (props: Props) => {
  return (
    <Container>
      <Title>{props.article.title}</Title>
      <Description>{props.article.description}</Description>
      <Link href={props.article.url} target="_blank" rel="noreferrer">Read more</Link>
    </Container>
  );
}