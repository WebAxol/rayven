precision mediump float;

uniform sampler2D atlasTexture;

uniform vec2 u_resolution;
uniform float u_atlasWidth;
uniform float u_atlasHeight;

varying vec2 v_texCoord;
varying vec2 v_texOffset;
varying vec4 v_color;

void main() {

    vec2 normalizedCoord = (2.0 * gl_FragCoord.xy - u_resolution) / u_resolution;

    // Scale UV coordinates to fit within a single texture unit and add offset
    // Use fract() to wrap UV coordinates within 0-1 range to prevent bleeding into adjacent textures
    vec2 texScale = vec2(1.0 / u_atlasWidth, 1.0 / u_atlasHeight);
    vec2 wrappedUV = fract(v_texCoord);
    vec2 atlasUV = v_texOffset + (wrappedUV * texScale);

    vec4 texColor = texture2D(atlasTexture, atlasUV);

    if(texColor.a < 0.1) discard;

    vec4 mixed = mix(texColor,v_color,0.5);

    float minLight = 0.3;
    float maxLight = 2.0;
    float lightIndex = 5.0;

    normalizedCoord *= 3.0;

    float depth = length(vec3(1.0 / gl_FragCoord.w, normalizedCoord));

    float lightLevel = min(max(lightIndex / pow(depth,2.0),minLight), maxLight);

    vec4 shaded = vec4(mixed.rgb * lightLevel, v_color.a);


    gl_FragColor = shaded;
}
