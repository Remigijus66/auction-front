export const get = async (url) => {
  const res = await fetch("http://localhost:4001/" + url)
  return await res.json()
}

export const post = async (url, data) => {
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(data),
    credentials: 'include'
  }

  const res = await fetch("http://localhost:4001/" + url, options)
  return await res.json()
}

// export const timeDisplay = (time) => {
//   const hours = Math.floor(time / 3600000);
//   time -= hours * 3600000;
//   const minutes = Math.floor(time / 60000);
//   time -= minutes * 60000;
//   const seconds = Math.floor(time / 1000);
//   return `${hours}:${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}`;
// }

export const timeDistance = (date1, date2) => {
  let distance = Math.abs(date1 - date2);
  // console.log(distance)
  const hours = Math.floor(distance / 3600000);
  distance -= hours * 3600000;
  const minutes = Math.floor(distance / 60000);
  distance -= minutes * 60000;
  const seconds = Math.floor(distance / 1000);
  return `${hours}:${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}`;
};