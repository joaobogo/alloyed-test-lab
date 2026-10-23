// @ts-nocheck
// Ported from the original Astro site.
import { useEffect } from "react";
import { cn, cssVars } from "@/lib/utils";
import { HeroArt as HeroArt } from "@/components/site/HeroArt";

export function HeroGL(props: any) {
// Real-time "molten alloy" field in raw WebGL (~4 KB of JS, no library).
// Loads after first paint, renders at reduced resolution on small screens,
// pauses when off-screen or hidden, and falls back to the static SVG when
// WebGL is unavailable or the visitor prefers reduced motion.
type _P = { class?: string }
const { class: cls = '' } = props;
  useEffect(() => {

  const start = () => {
    const wrap = document.querySelector<HTMLElement>('.hero-gl');
    const canvas = wrap?.querySelector<HTMLCanvasElement>('.hero-gl-canvas');
    if (!wrap || !canvas) return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const gl = canvas.getContext('webgl', { antialias: false, alpha: true, powerPreference: 'low-power' });
    if (!gl) return;

    const vs = `attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}`;
    const fs = `precision mediump float;uniform vec2 r;uniform float t;uniform vec2 m;
    // layered sine field, shaded like brushed metal with the brand palette
    float f(vec2 p){float a=0.;float w=1.;for(int i=0;i<4;i++){a+=w*sin(p.x*1.7+t*.35+sin(p.y*1.3-t*.2)*1.2);p=p*1.6+vec2(1.7,.9);w*=.55;}return a;}
    void main(){vec2 uv=(gl_FragCoord.xy-.5*r)/r.y;uv.x+=.35;uv+= (m-.5)*.08;
    float n=f(uv*2.2);float ridge=abs(fract(n*1.4+uv.y*.6)-.5);float line=smoothstep(.02,.0,ridge-.004)*smoothstep(.9,.2,length(uv*vec2(.8,1.3)));
    float glow=exp(-3.*length(uv-vec2(.3,-.1)));
    vec3 ink=vec3(.043,.063,.125);vec3 blue=vec3(.2,.17,.95);vec3 ember=vec3(1.,.42,0.);
    vec3 col=ink+blue*glow*.55;
    float k=smoothstep(-1.,1.,n);col=mix(col,blue,line*.9*(1.-k));col=mix(col,ember,line*k*.95);
    col+=ember*pow(max(0.,1.-abs(n-.6)),6.)*line*.6;
    float vig=smoothstep(1.25,.35,length(uv*vec2(.7,1.)));
    gl_FragColor=vec4(col,vig*(.35+line*.65));}`;
    const sh = (type: number, src: string) => { const s = gl.createShader(type)!; gl.shaderSource(s, src); gl.compileShader(s); return s; };
    const prog = gl.createProgram()!;
    gl.attachShader(prog, sh(gl.VERTEX_SHADER, vs)); gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, fs)); gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);
    const buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, 'p'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const uR = gl.getUniformLocation(prog, 'r'), uT = gl.getUniformLocation(prog, 't'), uM = gl.getUniformLocation(prog, 'm');
    gl.enable(gl.BLEND); gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    const small = innerWidth < 768;
    const scale = Math.min(small ? 0.6 : 1, devicePixelRatio > 1 ? 0.75 : 1);
    const resize = () => { canvas.width = Math.floor(wrap.clientWidth * scale); canvas.height = Math.floor(wrap.clientHeight * scale); gl.viewport(0, 0, canvas.width, canvas.height); gl.uniform2f(uR, canvas.width, canvas.height); };
    resize(); addEventListener('resize', resize, { passive: true });

    let mx = 0.5, my = 0.5, tx = 0.5, ty = 0.5;
    if (!small) addEventListener('pointermove', (e) => { tx = e.clientX / innerWidth; ty = 1 - e.clientY / innerHeight; }, { passive: true });

    let running = true, raf = 0; const t0 = performance.now();
    const frame = (now: number) => {
      if (!running) return;
      mx += (tx - mx) * 0.04; my += (ty - my) * 0.04;
      gl.uniform1f(uT, (now - t0) / 1000); gl.uniform2f(uM, mx, my);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      raf = requestAnimationFrame(frame);
    };
    const io = new IntersectionObserver(([e]) => { running = e.isIntersecting && !document.hidden; if (running) raf = requestAnimationFrame(frame); else cancelAnimationFrame(raf); });
    io.observe(wrap);
    document.addEventListener('visibilitychange', () => { running = !document.hidden; if (running) raf = requestAnimationFrame(frame); });
    canvas.classList.remove('opacity-0');
    wrap.querySelector('.hero-gl-fallback')?.classList.add('opacity-0');
  };
  (() => { 'requestIdleCallback' in window ? (window as any).requestIdleCallback(start, { timeout: 1200 }) : setTimeout(start, 200); })();
  }, []);
  return (
    <>

<div className={`hero-gl ${cls}`} aria-hidden="true">
  <HeroArt className="hero-gl-fallback absolute inset-0 h-full w-full" />
  <canvas className="hero-gl-canvas absolute inset-0 h-full w-full opacity-0 transition-opacity duration-1000"></canvas>
</div>





    </>
  );
}
