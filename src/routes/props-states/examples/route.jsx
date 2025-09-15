import { Link, useOutletContext, useParams } from 'react-router-dom';
import exampleDetails from './lib/details';
import { lazy, Suspense, useEffect, useMemo } from 'react';
import DefaultDescription from './DefaultDescription';

import styles from './examples.module.css';

const Examples = () => {
  const { componentKey } = useParams();
  const { setCurrentDescription } = useOutletContext();
  useEffect(() => {
    if (!componentKey || !exampleDetails?.[componentKey]) {
      setCurrentDescription(<DefaultDescription/>);
      return;
    }
  }, []);

  const handleComponentNavigation = (key) => {
    nav(key);
  }
  if (!componentKey) {
    return <div className={styles.examplesContainer}>
      {Object.keys(exampleDetails).map((key)=>(<Link className={styles.exampleLink} to={key} name={key} onClick={()=>handleComponentNavigation(key)}>{exampleDetails[key].title}</Link>))}
    </div>
  }
  if (!exampleDetails?.[componentKey]) {
    return <h1>Invalid component</h1>;
  }
  const importFn = exampleDetails[componentKey].component;
  const importDescriptionFn = exampleDetails[componentKey].description;
  if (!importFn||!importDescriptionFn) return <p>No component with provided Key</p>;
  const LazyExample = useMemo(() => lazy(importFn), [importFn]);
  const LazyDescription = useMemo(()=>lazy(importDescriptionFn),[importDescriptionFn]);
  setCurrentDescription(<LazyDescription/>);
  return (
    <Suspense key={componentKey} fallback={<p>Loading {componentKey}...</p>}>
      <LazyExample />
    </Suspense>
  );
};

export default Examples;
