import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    editLink: false,
    logo: '/portfolio/logo.png',
    lastUpdated: false,
    footer: `Copyright © 2024<br /> by Jiarui Wu`,
    nprogress: false,
    prefersColor: { default: 'auto' },
    socialLinks: {
      github: 'https://github.com/jwu114',
      linkedin: 'https://www.linkedin.com/in/jiarui-jerry-wu/',
    },
    nav: [{ title: 'Contact', children: [{title: 'jwu114@u.rochester.edu'},{title: 'w670699337@gmail.com'}]}],
  },
  favicons: ['/portfolio/favicon.ico'],
  locales: [{ id: 'en-US', name: 'English'}],
  base: process.env.NODE_ENV === 'production' ? '/portfolio' : '/',
  publicPath: process.env.NODE_ENV === 'production'? '/portfolio/' : '/',
  exportStatic: {},
});
