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
                  buildHookId: '5e90c655f2fcfc5c509cb790',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-w8yxa6ws',
                  apiId: 'd6d44c25-2aab-4f10-aaa8-9983f024e8ba'
                },
                {
                  buildHookId: '5e90c655abd8cc7325284c52',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-auqjm7vv',
                  apiId: '8ae58611-9baf-4a74-938d-17fa5ca1ab4f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gtlovell/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-auqjm7vv.netlify.com', category: 'apps' }
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
