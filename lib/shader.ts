// WebGL Shader Utility untuk Hero background
// Handles: init WebGL, compile shaders, render loop

export const VERTEX_SHADER_SRC = `
  attribute vec2 a_position;
  varying vec2 v_texCoord;
  void main() {
    v_texCoord = (a_position + 1.0) * 0.5;
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`

export const FRAGMENT_SHADER_SRC = `
  precision highp float;
  varying vec2 v_texCoord;
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform vec2 u_mouse;

  void main() {
    vec2 uv = v_texCoord;
    float line = sin(uv.x * 20.0 + u_time) * 0.1 + uv.y;
    float alpha = smoothstep(0.48, 0.5, line) - smoothstep(0.5, 0.52, line);
    vec3 bgColor = vec3(0.031, 0.075, 0.165);
    vec3 cyan    = vec3(0.392, 1.0, 0.855);
    vec3 color   = mix(bgColor, cyan, alpha * 0.3);
    float pulse  = pow(sin(u_time * 0.5 + uv.x * 5.0), 10.0);
    color += cyan * pulse * 0.1;
    
    // Mouse interaction: subtle radial glow
    vec2 mouseUV = u_mouse / u_resolution;
    float dist = distance(uv, mouseUV);
    float mouseGlow = smoothstep(0.35, 0.0, dist) * 0.08;
    color += cyan * mouseGlow;
    
    gl_FragColor = vec4(color, 1.0);
  }
`

export interface ShaderProgram {
  program: WebGLProgram
  gl: WebGLRenderingContext
  uniforms: {
    u_time: WebGLUniformLocation | null
    u_resolution: WebGLUniformLocation | null
    u_mouse: WebGLUniformLocation | null
  }
}

function compileShader(
  gl: WebGLRenderingContext,
  src: string,
  type: number
): WebGLShader | null {
  const shader = gl.createShader(type)
  if (!shader) return null
  gl.shaderSource(shader, src)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('Shader compile error:', gl.getShaderInfoLog(shader))
    gl.deleteShader(shader)
    return null
  }
  return shader
}

export function initShader(canvas: HTMLCanvasElement): ShaderProgram | null {
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl') as WebGLRenderingContext | null
  if (!gl) {
    console.warn('WebGL not supported')
    return null
  }

  const vertShader = compileShader(gl, VERTEX_SHADER_SRC, gl.VERTEX_SHADER)
  const fragShader = compileShader(gl, FRAGMENT_SHADER_SRC, gl.FRAGMENT_SHADER)
  if (!vertShader || !fragShader) return null

  const program = gl.createProgram()
  if (!program) return null
  gl.attachShader(program, vertShader)
  gl.attachShader(program, fragShader)
  gl.linkProgram(program)

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('Program link error:', gl.getProgramInfoLog(program))
    return null
  }

  // Full-screen quad
  const positionBuffer = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
    gl.STATIC_DRAW
  )

  const posLoc = gl.getAttribLocation(program, 'a_position')
  gl.enableVertexAttribArray(posLoc)
  gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0)

  gl.useProgram(program)

  return {
    program,
    gl,
    uniforms: {
      u_time: gl.getUniformLocation(program, 'u_time'),
      u_resolution: gl.getUniformLocation(program, 'u_resolution'),
      u_mouse: gl.getUniformLocation(program, 'u_mouse'),
    },
  }
}

export function renderFrame(
  sp: ShaderProgram,
  time: number,
  mouse: { x: number; y: number }
) {
  const { gl, uniforms } = sp
  const canvas = gl.canvas as HTMLCanvasElement

  gl.viewport(0, 0, canvas.width, canvas.height)
  gl.uniform1f(uniforms.u_time, time)
  gl.uniform2f(uniforms.u_resolution, canvas.width, canvas.height)
  gl.uniform2f(uniforms.u_mouse, mouse.x, mouse.y)
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
}
