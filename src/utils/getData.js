import axios from "axios";
axios.defaults.baseURL = "https://yt-api.p.rapidapi.com"
const options = {
 params: { geo: "TR", lang: "tr" },
 headers: {
  'X-RapidAPI-Key': 'dde666c872msh652dd309ed22d71p17afc2jsn9dfafbe5403e',
  'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
 }
};

export const getData = async (path) => {
 try {
  const response = await axios.get(path, options);
  return response.data;

 } catch (error) {
  console.log(error);
 }
}