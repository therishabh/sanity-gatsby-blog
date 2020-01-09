export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e16d24faca58ac6bf901d78',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-wknx5683',
                  apiId: '09ccaba2-e4ce-4c18-a6b5-e14a2b5657c3'
                },
                {
                  buildHookId: '5e16d24fbac481e39a1e4080',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-5bqbcqpp',
                  apiId: '250ad950-9808-4dc7-bcd5-411b97ed2190'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/therishabh/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-5bqbcqpp.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
