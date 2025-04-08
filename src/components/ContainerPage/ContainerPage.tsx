import Container from '@mui/material/Container';

export function ContainerPage({ children }: { children: JSX.Element | JSX.Element[] }) {
  return (
    <Container maxWidth="sm">
      <div > {children} </div>
    </Container>
  );
}
