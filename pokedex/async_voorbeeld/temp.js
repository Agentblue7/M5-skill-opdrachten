async function fetchURl() {
  try {
    let response = await fetch("https://mediacollege.dev/catabase/");
    let data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
fetchURl()
