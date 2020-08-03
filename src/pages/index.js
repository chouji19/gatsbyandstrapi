import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import useProjects from "../hooks/useProjects"
import Image from 'gatsby-image'

const IndexPage = () => {
  
  const projects = useProjects()
  return (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <div className="projectsContainer">
    {
      projects.map(project=>(
        <div key={project.id} className='projectItem'>
          <Image
            fluid={project.image.sharp.fluid}
          />
          <span>{project.name}</span>
        </div>
      ))
    }
    </div>
  </Layout>
)}

export default IndexPage
