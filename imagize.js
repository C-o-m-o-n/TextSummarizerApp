async function imagize(prompt){
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", process.env['ACCESS_TOKEN']);

  var raw = JSON.stringify(prompt);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  try {
    const response = await fetch("https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0", requestOptions)
      
    return response.text()
  } catch(error){
    console.log('error', error)
  }
}

model.exports = imagize