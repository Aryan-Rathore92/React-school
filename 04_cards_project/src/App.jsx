import Card from './components/Card.jsx'
const App = () => {

   const jobOpenings = [
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/500px-Google_%22G%22_logo.svg.png",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAel73XxRrOwTx8yGLTOvVpoqkLUELbaRSLg&s",
    companyName: "Meta",
    datePosted: "10 days ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn1TRltqzNicebAOcK_8t53eWwbFC-eQPUsw&s",
    companyName: "Apple",
    datePosted: "3 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/020/336/373/non_2x/netflix-logo-netflix-icon-free-free-vector.jpg",
    companyName: "Netflix",
    datePosted: "1 week ago",
    post: "UI/UX Designer",
    tag1: "Contract",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://mailmeteor.com/logos/assets/PNG/Microsoft_Logo_512px.png",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://www.logo.wine/a/logo/Tesla%2C_Inc./Tesla%2C_Inc.-Logomark-Black-Logo.wine.svg",
    companyName: "Tesla",
    datePosted: "8 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzTmVc7unwsynm3Ofz31vehWOoGK4FMpkPtw&s",
    companyName: "Adobe",
    datePosted: "6 weeks ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$58/hr",
    location: "Gurgaon, India"
  },
  {
    brandLogo: "https://img.freepik.com/premium-vector/vinnytsia-ukraine-april-29-2023-popular-social-media-logo-twitter-icon-vector-design-realistic-editorial-sign_545793-1694.jpg?semt=ais_user_personalization&w=740&q=80",
    companyName: "Twitter (X)",
    datePosted: "12 days ago",
    post: "DevOps Engineer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$68/hr",
    location: "Remote, India"
  },
  {
    brandLogo: "https://img.freepik.com/premium-vector/vector-linkedin-apps-logo-rounded-asset-isolated_1004619-457.jpg?semt=ais_user_personalization&w=740&q=80",
    companyName: "LinkedIn",
    datePosted: "9 weeks ago",
    post: "Data Scientist",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Bangalore, India"
  }
];


  return (
    
    <div className='parent'>
    
     {jobOpenings.map(function(elem, idx){
      console.log(idx);
      
      return <div  key={idx}>
          <Card company={elem.companyName} post={elem.post}
                   tag1={elem.tag1} tag2={elem.tag2} datePosted={elem.datePosted}
                   pay={elem.pay} location={elem.location} brandLogo={elem.brandLogo}
          />
      </div>
     })}
   
    </div>




    
  )
}

export default App
