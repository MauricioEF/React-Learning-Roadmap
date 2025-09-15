import { Link } from 'react-router-dom';
import styles from './home.module.css';
import { modules } from './modules';

const Home = () => {

  return (
    <div className={styles.container}>
      <h1>React Roadmap</h1>
      <p>
        Este projecto servirá como archivo de todos los elementos necesarios
        para dominar React
      </p>
      <br/>
      {modules.map(module=><div><Link to={module.link}>{module.title}</Link></div>)}
    </div>
  );
};

export default Home;
