import { Helmet, HelmetProvider } from 'react-helmet-async';
import { DogList } from 'features/dogsList/components/DogList/DogList';

function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>dog-api-fetcher</title>
          <link rel="canonical" href="https://dog.ceo/dog-api/" />
        </Helmet>
      </HelmetProvider>
      <DogList />
    </>
  );
}

export default App;
