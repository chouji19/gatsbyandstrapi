import { graphql, useStaticQuery } from 'gatsby'

const useProjects = () => {
    const result = useStaticQuery(graphql`
    query MyQuery {
        allStrapiProjects {
          nodes {
            id
            name
            image {
                sharp: childImageSharp {
                    fluid(maxWidth: 400){
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
            }
          }
        }
      }
    `)

    console.log(result)
    return result.allStrapiProjects.nodes;
}
 
export default useProjects;