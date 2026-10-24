import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

// As 6 seções da wiki. Os textos usam translate() para que a versão em
// inglês venha de i18n/en/code.json (gerado por "npm run write-translations").
const sections = [
  {
    to: '/docs/biblioteca-bim-cad',
    title: translate({id: 'home.section.biblioteca.title', message: 'Biblioteca BIM/CAD'}),
    description: translate({
      id: 'home.section.biblioteca.description',
      message: 'Famílias Revit, blocos DWG e templates, com parâmetros, versão mínima e download.',
    }),
  },
  {
    to: '/docs/catalogo',
    title: translate({id: 'home.section.catalogo.title', message: 'Catálogo'}),
    description: translate({
      id: 'home.section.catalogo.description',
      message: 'Fichas de produtos e componentes elétricos com especificações padronizadas.',
    }),
  },
  {
    to: '/docs/cursos',
    title: translate({id: 'home.section.cursos.title', message: 'Cursos'}),
    description: translate({
      id: 'home.section.cursos.description',
      message: 'Trilhas com módulos e aulas em sequência.',
    }),
  },
  {
    to: '/docs/normas',
    title: translate({id: 'home.section.normas.title', message: 'Normas'}),
    description: translate({
      id: 'home.section.normas.description',
      message: 'Resumos próprios, índice por tema e links para as fontes oficiais.',
    }),
  },
  {
    to: '/docs/documentacao',
    title: translate({id: 'home.section.documentacao.title', message: 'Documentação'}),
    description: translate({
      id: 'home.section.documentacao.description',
      message: 'Procedimentos, padrões e guias de trabalho.',
    }),
  },
  {
    to: '/docs/calculos',
    title: translate({id: 'home.section.calculos.title', message: 'Cálculos'}),
    description: translate({
      id: 'home.section.calculos.description',
      message: 'Teoria, premissas e norma de cada cálculo, com calculadora interativa.',
    }),
  },
];

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <Translate id="home.title">Wiki de Engenharia</Translate>
        </Heading>
        <p className="hero__subtitle">
          <Translate id="home.tagline">Engenharia elétrica com Revit e AutoCAD</Translate>
        </p>
      </div>
    </header>
  );
}

function SectionCard({to, title, description}) {
  return (
    <div className={clsx('col col--4', styles.cardCol)}>
      <Link to={to} className={clsx('card', styles.card)}>
        <div className="card__header">
          <Heading as="h2" className={styles.cardTitle}>
            {title}
          </Heading>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function Home() {
  return (
    <Layout
      title={translate({id: 'home.pageTitle', message: 'Início'})}
      description={translate({
        id: 'home.metaDescription',
        message: 'Wiki pública de engenharia elétrica com Revit e AutoCAD.',
      })}>
      <HomepageHeader />
      <main className="container margin-vert--lg">
        <div className="row">
          {sections.map((section) => (
            <SectionCard key={section.to} {...section} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
