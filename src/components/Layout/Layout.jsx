import { Container } from 'components/BasicStyles/Container.styled';

export const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};
// ----------побудова сторінки------------
//  <Container>
//     <header>HEADER</header>
//     <main>{children}</main>
//     <footer>FOOTER</footer>
//  </Container>
