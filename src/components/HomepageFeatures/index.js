import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Facil de Entender',
    Svg: require('@site/static/img/img1.svg').default,
    description: (
      <>
        Hemos diseñado este manual para que sea clara, sencilla y fácil de seguir. Aquí encontrarás explicaciones 
        paso a paso con ejemplos que te ayudarán a entender todo sin complicaciones.
      </>
    ),
  },
  {
    title: 'Detecta errores al instante',
    Svg: require('@site/static/img/img2.svg').default,
    description: (
      <>
        Usa el panel Sources para depurar tu código JavaScript. Puedes establecer puntos de interrupción, inspeccionar variables y
        seguir el flujo de ejecución de tu código. Esto te ayudará a identificar y corregir errores de manera más eficiente.
      </>
    ),
  },
  {
    title: 'Analiza tu red de forma clara y rápida',
    Svg: require('@site/static/img/img3.svg').default,
    description: (
      <>
        Puedes visualizar cómo se conectan los dispositivos, detectar problemas y optimizar el rendimiento en pocos pasos.
        Además, puedes ver el tiempo que tarda cada solicitud y cómo se comporta tu aplicación en diferentes condiciones de red.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
