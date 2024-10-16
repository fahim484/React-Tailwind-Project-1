import { ArrowButton } from '../common/ArrowButton'
import { SectionTitle } from '../common/SectionTitle'
import { Arrow } from '../Icon'

export const ProblemSolutionHeader = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center md:justify-between items-center gap-5'>
        <SectionTitle gradient="Solution" className="text-start">
            Problem &
        </SectionTitle>

        <div className='flex justify-center items-center gap-[15px]'>
            {/* <button className='bg-white size-10 rounded-full text-primary flex justify-center items-center shadow-arrow-btn'><Arrow/></button>
            <button className='bg-gradient-primary size-10 rounded-full text-white flex justify-center items-center shadow-arrow-btn'><Arrow/></button> */}
            <ArrowButton className="rotate-180" />
            <ArrowButton className="bg-gradient-primary text-white" />
        </div>
    </div>
  )
}
