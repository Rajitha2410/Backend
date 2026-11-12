

const CourseDetails = () => {
    const course="Full-Stack"
    const trainer="Mugundhan"
    const duration="7Months"
    const fees="45,000"
  return (
    <>
    <div className ="bg-green-400 text-black p-4  text-center" >
       
         <h1 >Course Detail</h1> 
         <h2>Course:{course}</h2>
         <h2>Trainer:{trainer}</h2>
         <h2>Duration:{duration}</h2>
         <h2>Fees:{fees}</h2>
         my course{course}

    </div>
    </>
  )
}

export default CourseDetails