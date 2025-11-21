import ImageLoader from "../utils/rendering/ImageLoader.js";

const loader = new ImageLoader();


loader.load('floor','floor.webp');
loader.load('atlas','atlas.png');
loader.load('sky','land.webp');


export default loader;