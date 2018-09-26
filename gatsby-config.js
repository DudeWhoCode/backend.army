module.exports = {
  siteMetadata: {
    title: 'dudewho.codes',
    description: 'Portfolio of Naren. I am a Software Consultant and I have worked with \
    variety of technologies. I am good at backend stuffs.',
    keywords: 'naren, software, consultant, software consultant, backend, python, golang, aws, azure, \
    architect, cloud'
  },
  plugins: ['gatsby-plugin-react-helmet',
            {
              resolve: 'gatsby-source-contentful',
              options: {
                spaceId: 'nl0k44kxvdg7',
                accessToken: '74d6354ae2012549c874492324266f0ea00157aed4dedca7333e6dc2e5fbbed2'
              }
            }],
}
