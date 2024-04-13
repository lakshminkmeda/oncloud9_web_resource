// Add your javascript here

  // GET API REQUEST
  async function get_visitors() {
    // call post api request function
    //await post_visitor();
  try {	
    let response = await fetch('https://xexf61xhm7.execute-api.eu-north-1.amazonaws.com/Prod/visitor_count', {
      method: 'GET',
      headers: {
            //'x-api-key': 'JslbDfdt1F8fl7wE4CRIj1Oqidmtmzqw4lZ539Sj',
      }
      });
      let data = await response.json()
      document.getElementById("visitors").innerHTML = "Total visitors: " + data['count'];
      console.log(data);
      return data;
  } catch (err) {
      console.error(err);
  }
}

get_visitors();