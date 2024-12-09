import React from 'react'
import ProjectsHero from '@/components/projects/ProjectsHero'
import ConstructionProjects from '@/components/projects/ConstructionProjects'
import MebProjects from '@/components/projects/MebProjects'
import Divider from '@/components/Divider'

const ProjectPage = () => {
  return (
    <div> 

<ProjectsHero/>
<ConstructionProjects/>

<MebProjects/>
    </div>
  )
}

export default ProjectPage