import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from './components/Home';
import Redirect from './components/Redirect';
import { seo } from './config';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
  return (
    <Router>
      <Helmet>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />

        <meta name='description' content={seo.description} />
        <meta property='og:title' content={seo.title} />
        <meta property='og:description' content={seo.description} />
        <meta property='og:image' content={seo.image} />
        <meta property='og:url' content={seo.url} />
        <meta name='twitter:title' content={seo.title} />
        <meta name='twitter:description' content={seo.description} />
        <meta name='twitter:image' content={seo.image} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:creator' content={seo.title} />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap'
          rel='stylesheet'
        />
        <link rel='icon' type='image/png' href={seo.logo} />
        <title>Zomy | URL Shortener | Link Shortener</title>
      </Helmet>
      <GlobalStyles />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/robots.txt' />
        <Route path='/sitemap.xml' />
        <Route exact path='/:id' component={Redirect} />
      </Switch>
    </Router>
  );
};

export default App;
