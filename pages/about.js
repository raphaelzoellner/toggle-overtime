import Layout from '../components/MyLayout';
let base64 = require('base-64');

const email = "";
const api_token = "";
const workspace_id = "";

const getWorkSpaces = () => {
  console.log("on getWorkSpaces")
  fetch(`https://www.toggl.com/api/v8/workspaces?user_agent=${email}`,
    {
      method: "GET",
      headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + base64.encode(`${api_token}` + ":" + "api_token")
      }
    }
  ).then(resp => console.log(resp.json()))


}

const getWeeklyReport = () => {
  console.log("fetch reports")

  fetch(`https://toggl.com/reports/api/v2/weekly?user_agent=${email}&workspace_id=${workspace_id}`,
    {
      method: "GET",
      headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + base64.encode("eeb69c3f3dc19ef5258a1ec869b5270c" + ":" + "api_token")
      }
    }
  ).then(resp => console.log(resp.json()))
}

export default function About() {
  return (
    <Layout>
      <p>This is the about page</p>
      <input type="button" onClick={getWorkSpaces} value="Get Workspaces"/>
      <input type="button" onClick={getWeeklyReport} value="Get Weekly Report"/>
    </Layout>
  );
}