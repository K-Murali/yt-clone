import axios from 'axios' ;

// process.env.REACT_APP_API_KEY

const base_url="https://youtube138.p.rapidapi.com"


const options = {
  params: {
    hl: 'en',
    gl: 'IN',
  },
  // 88bcd78092mshce9d6864575d6d8p1fb2a5jsn7594ce159309
  headers: {
    'X-RapidAPI-Key':"0d0b5028bfmshcd46054ed021906p193cd9jsn47dc70454671",
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};
 export const fetchdata = async (url)=>{
      const {data}= await axios.get(`${base_url}/${url}`,options)
      
      return data;
}
