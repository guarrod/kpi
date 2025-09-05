import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Copy, RefreshCw, CheckCircle2 } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

export default function StepSummary({
  service,
  bizGoal,
  userGoal,
  notes,
  tasks,
  selected,
  kpiCatalogWithUrl,
  setInfo,
  resolveKpiUrl,
  copyMarkdown,
  resetAll,
}) {
  const captureRef = React.useRef(null);

  const inlineStylesDeep = (src, dest) => {
    const win = src.ownerDocument.defaultView || window;
    const computed = win.getComputedStyle(src, null);
    let cssText = "";
    for (let i = 0; i < computed.length; i++) {
      const name = computed[i];
      cssText += `${name}:${computed.getPropertyValue(name)};`;
    }
    dest.setAttribute("style", cssText);
    // copy input values
    if (src.tagName === 'INPUT' || src.tagName === 'TEXTAREA') {
      dest.setAttribute('value', src.value || '');
      dest.textContent = src.value || '';
    }
    const srcChildren = src.childNodes || [];
    const destChildren = dest.childNodes || [];
    for (let i = 0; i < srcChildren.length; i++) {
      const s = srcChildren[i];
      const d = destChildren[i];
      if (s && d && s.nodeType === 1 && d.nodeType === 1) {
        inlineStylesDeep(s, d);
      }
    }
  };

  const downloadAsImage = async () => {
    const node = captureRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const w = Math.ceil(rect.width);
    const h = Math.ceil(rect.height);
    const clone = node.cloneNode(true);
    inlineStylesDeep(node, clone);
    const wrapper = document.createElement("div");
    wrapper.setAttribute("xmlns", "http://www.w3.org/1999/xhtml");
    wrapper.style.background = "white";
    wrapper.style.width = `${w}px`;
    wrapper.style.height = `${h}px`;
    wrapper.appendChild(clone);
    const serializer = new XMLSerializer();
    const xhtml = serializer.serializeToString(wrapper);
    const svg = `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><foreignObject x="0" y="0" width="100%" height="100%">${xhtml}</foreignObject></svg>`;
    const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const img = new Image();
    // try to avoid taint by not pulling any remote resource
    img.crossOrigin = 'anonymous';
    const scale = Math.min(2, window.devicePixelRatio || 1.5);
    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
      img.src = url;
    });
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.floor(w * scale));
    canvas.height = Math.max(1, Math.floor(h * scale));
    const ctx = canvas.getContext('2d');
    ctx.scale(scale, scale);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, w, h);
    ctx.drawImage(img, 0, 0, w, h);
    URL.revokeObjectURL(url);
    try {
      const pngUrl = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      const niceName = `kpi-resumen-${new Date().toISOString().slice(0,19).replace(/[:T]/g,'-')}.png`;
      a.download = niceName;
      a.href = pngUrl;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (err) {
      // Fallback: descargar el SVG si el canvas está tainted
      const a = document.createElement('a');
      const niceName = `kpi-resumen-${new Date().toISOString().slice(0,19).replace(/[:T]/g,'-')}.svg`;
      a.download = niceName;
      const svgBlob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
      a.href = URL.createObjectURL(svgBlob);
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    }
  };

  const downloadAsSVG = async () => {
    const node = captureRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const w = Math.ceil(rect.width);
    const h = Math.ceil(rect.height);
    const clone = node.cloneNode(true);
    inlineStylesDeep(node, clone);
    const wrapper = document.createElement("div");
    wrapper.setAttribute("xmlns", "http://www.w3.org/1999/xhtml");
    wrapper.style.background = "white";
    wrapper.style.width = `${w}px`;
    wrapper.style.height = `${h}px`;
    wrapper.appendChild(clone);
    const serializer = new XMLSerializer();
    const xhtml = serializer.serializeToString(wrapper);
    const svg = `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><foreignObject x="0" y="0" width="100%" height="100%">${xhtml}</foreignObject></svg>`;
    const a = document.createElement('a');
    const niceName = `kpi-resumen-${new Date().toISOString().slice(0,19).replace(/[:T]/g,'-')}.svg`;
    a.download = niceName;
    const svgBlob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
    a.href = URL.createObjectURL(svgBlob);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  };
  return (
    <Card ref={captureRef} className="shadow-sm rounded-2xl">
      <CardHeader>
        <SectionTitle
          icon={CheckCircle2}
          title="5) Resumen y confirmación"
          subtitle="Todo listo para compartir y repetir en otro servicio"
        />
      </CardHeader>
      <CardContent>
        <div  className="grid md:[grid-template-columns:3fr_4fr] gap-6">
          <div>
            <h4 className="font-semibold mb-2">Contexto</h4>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-medium">Servicio / producto:</span> {service || (
                  <i className="text-gray-400">—</i>
                )}
              </p>
              <p>
                <span className="font-medium">Objetivo de negocio:</span> <br /> {bizGoal || (
                  <i className="text-gray-400">—</i>
                )}
              </p>
              <p>
                <span className="font-medium">Objetivo de usuario:</span> <br /> {userGoal || (
                  <i className="text-gray-400">—</i>
                )}
              </p>
              {notes && <p className="text-gray-500">{notes}</p>}
            </div>
            <Separator className="my-4" />
            <h4 className="font-semibold mb-2">Tareas clave</h4>
            <ul className="list-disc ml-5 text-sm space-y-1">
              {tasks.filter(Boolean).map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">KPIs seleccionados</h4>
            <div className="space-y-3">
              {Object.keys(selected).length === 0 && (
                <p className="text-sm text-gray-500">No hay KPIs seleccionados.</p>
              )}
              {Object.keys(selected).map((id) => {
                const k = kpiCatalogWithUrl.find((x) => x.id === id);
                const meta = selected[id];
                return (
                  <div key={id} className="border rounded-2xl p-3">
                    <div className="items-center justify-between gap-2">
                      <div className="mb-2">
                        <Badge variant="outline">{k.cat}</Badge>
                      </div>
                      <div className="gap-2">
                        <div className="font-medium flex items-center gap-2">
                          {k.title}
                          {k.url && (
                            <button
                              type="button"
                              title="Más info"
                              onClick={() =>
                                setInfo({
                                  open: true,
                                  url: resolveKpiUrl(k.url),
                                  title: k.title,
                                  id: k.id,
                                })
                              }
                              className="ml-1 inline-flex items-center justify-center w-5 h-5 rounded-full border text-xs text-gray-600 hover:bg-gray-100"
                            >
                              ?
                            </button>
                          )}
                        </div>
                        <div className="text-xs text-gray-500">{k.desc}</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs mt-2">
                      <div>
                        <span className="text-gray-500">Baseline:</span> {meta.baseline || <i>—</i>}
                      </div>
                      <div>
                        <span className="text-gray-500">Meta:</span> {meta.target || <i>—</i>}
                      </div>
                     {/*  <div>
                        <span className="text-gray-500">Liberación:</span> {meta.timeframe || <i>—</i>}
                      </div> */}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-6">
          <Button onClick={copyMarkdown} className="gap-2">
            <Copy className="h-4 w-4" /> Copiar resumen (Markdown)
          </Button>
          <Button onClick={downloadAsImage} className="gap-2" variant="outline">
            Descargar imagen (PNG)
          </Button>
          <Button onClick={downloadAsSVG} className="gap-2" variant="outline">
            Descargar (SVG)
          </Button>
          <Button variant="secondary" onClick={resetAll} className="gap-2">
            <RefreshCw className="h-4 w-4" /> Nuevo servicio
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

