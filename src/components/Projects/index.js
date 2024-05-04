import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>

        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEB APPLICATIONS</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APPLICATIONS</ToggleButton>
          }
          <Divider />
          {toggle === 'open source' ?
            <ToggleButton active value="open source" onClick={() => setToggle('open source')}>OPEN SOURCE CONTRIBUTION</ToggleButton>
            :
            <ToggleButton value="open source" onClick={() => setToggle('open source')}>OPEN SOURCE CONTRIBUTION</ToggleButton>
          }
          <Divider />
          {toggle === 'training' ?
            <ToggleButton active value="training" onClick={() => setToggle('training')}>INDUSTRIAL TRAINING</ToggleButton>
            :
            <ToggleButton value="training" onClick={() => setToggle('training')}>INDUSTRIAL TRAINING</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects