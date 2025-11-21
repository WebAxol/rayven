export var rayvenConfig = {
    resolution : 600,
    textureAtlasWidth  : 4,  // Number of textures per row in the texture atlas
    textureAtlasHeight : 1,  // Number of textures per column in the texture atlas
    shaders : {
        vertexShader        : "./shaders/rect.vert",
        frontFragmentShader : "./shaders/front.frag",
        lyingFragmentShader : "./shaders/lying.frag"
    }
};