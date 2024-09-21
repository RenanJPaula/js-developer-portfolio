
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/willianpezzini/js-developer-portfolio/refs/heads/meu-portfolio/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
