
import Card from './components/Card'
const App = () => {

  const jobListings = [
  {
    brandLogo: "   https://tse1.mm.bing.net/th/id/OIP.WZEsF8Yzchv1bEJgr7AiZAHaHa?pid=Api&P=0&h=180  ",
    companyName: "Google",
    datePosted: "3 days ago",
    post: "Frontend Developer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$70/hour",
    jobLocation: "Bangalore, India"
  },
  {
    brandLogo: "  https://tse4.mm.bing.net/th/id/OIP.zdlEg6NdQO90ZTPa5KHrlAHaHa?pid=Api&P=0&h=180  ",
    companyName: "Microsoft",
    datePosted: "5 days ago",
    post: "React Developer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$60/hour",
    jobLocation: "Hyderabad, India"
  },
  {
    brandLogo: "  https://tse3.mm.bing.net/th/id/OIP.YKFZjzosPzcUtBNHe9cAdAHaEK?pid=Api&P=0&h=180   ",
    companyName: "Amazon",
    datePosted: "1 day ago",
    post: "Frontend Engineer",
    tag1: "Part-time",
    tag2: "Junior Level",
    pay: "$55/hour",
    jobLocation: "Mumbai, India"
  },
  {
    brandLogo: "  https://tse1.mm.bing.net/th/id/OIP.B5WfZLas4wayLA2hcIWW2gHaE9?pid=Api&P=0&h=180  ",
    companyName: "Apple",
    datePosted: "4 days ago",
    post: "Software Developer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$75/hour",
    jobLocation: "Pune, India"
  },
  {
    brandLogo: " https://tse1.mm.bing.net/th/id/OIP.3ZAZvzn_3ypWLvFrRYN5iAHaHa?pid=Api&P=0&h=180  ",
    companyName: "Meta",
    datePosted: "2 days ago",
    post: " Data analyst",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$58/hour",
    jobLocation: "Gurgaon, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "6 days ago",
    post: "AI Engineer",
    tag1: "Part-time",
    tag2: "Mid Level",
    pay: "$65/hour",
    jobLocation: "Remote"
  },
  {
    brandLogo: "  https://tse3.mm.bing.net/th/id/OIP.Cat69vJTP8Vp_yYhPDizvgHaJa?pid=Api&P=0&h=180  ",
    companyName: "Adobe",
    datePosted: "2 days ago",
    post: "java Developer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$68/hour",
    jobLocation: "Noida, India"
  },
  {
    brandLogo: "  https://tse4.mm.bing.net/th/id/OIP.7qx99OizDrFQjb1EkgZ-YAHaEK?pid=Api&P=0&h=180   ",
    companyName: "IBM",
    datePosted: "5 days ago",
    post: "Full stack Developer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$57/hour",
    jobLocation: "Chennai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/oracle.com",
    companyName: "Oracle",
    datePosted: "3 days ago",
    post: "UI/UX Engineer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$52/hour",
    jobLocation: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "1 day ago",
    post: "Network engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$72/hour",
    jobLocation: "Remote"
  }
];

  return (
    <div className='Parent' >

      {jobListings.map(function(elem,idx){
        return <div key={idx}> 
        <Card company={elem.companyName} posted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={
          elem.pay} location={elem.jobLocation} brandLogo={elem.brandLogo}/>
          </div>
      })}
      
    </div>
  )
}

export default App

