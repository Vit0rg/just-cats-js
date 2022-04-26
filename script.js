const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

const getCats = async() =>
{
  try
  {
    const data = await fetch(BASE_URL);
    const json = await data.json();
    //.then(json => data.json())
    return json.webpurl;
  }
  catch(err)
  {
    console.log(err.message);
  }
};

const catButton = document.getElementById('change-cat');
let catImage = document.getElementById('cat');

const loadImage = async() =>
{
  catImage.src = await getCats();
}

catButton.addEventListener('click', loadImage);

loadImage();
