import React from 'react';
import Bread from '../images/bread.jpg'

const Title = () => {
  return (
    <div className="title">
      <h1>This website is dedicated to Dorothy Demke and the staff,
customers and friends of the early days of Some Crust Bakery.</h1>
      <p>Dorothy opened Some Crust in the summer of 1981. It was a great place to shop and also a great place to work. Dorothy had a vision and she brought it to life with the help and creative energy of the people who worked in the bakery. Many friendships began in the bakery. For a lot of people, Some Crust was a first job. For some it became a career and they are still working in the industry. Jack still works there and manages Some Crust for the current owners. All friends, former employees and customers are invited to post your memories, musings and pictures here and read what others have shared. Feel free to add as much as you like. Let’s see how it evolves. I hope it brings back some sweet memories.    Love, Sarah (Dorothy’s daughter)</p>
    <div className='titlepic'>
        <img src={Bread} width='200px' height='150px' alt='bread display' />
    </div>
    </div>
  )
}

export default Title;