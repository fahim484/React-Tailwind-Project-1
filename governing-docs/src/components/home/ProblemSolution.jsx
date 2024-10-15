import React from 'react'
import { Container } from '../common/Container'
import { ProblemSolutionHeader } from './ProblemSolutionHeader'

export const ProblemSolution = () => {
  return (
    <section className='pt-32'>
      <Container>
        <ProblemSolutionHeader />
        <div>list</div>
      </Container>
    </section>
  )
}
