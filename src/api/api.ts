export async function fetchWaifu() {
  return await fetch('https://api.waifu.pics/sfw/waifu')
    .then(async (response) => await response.json())
    .then(({ url }) => url)
}
