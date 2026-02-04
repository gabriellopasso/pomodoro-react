import { Container } from '../../components/Container';
import { MainTemplate } from '../../templates/MainTemplates';

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <h1>Pagina não encontrada</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          deserunt fugiat repudiandae vel distinctio voluptatem nam?
          Perspiciatis, id in aut sint sunt voluptate consequatur assumenda et
          numquam, doloremque hic non.
        </p>
      </Container>
    </MainTemplate>
  );
}
