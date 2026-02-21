const Card = () => {

  let username = "Sarthak Rathore";
  let course = "B.tech"
  let age = 18
  return (
    
    <div className='card'>
      <h1>{username}</h1>
      <p>My name is {username} and currently i am doing {course}. I am {age} year old boy.</p>
    </div>

  )
}
export default Card;
