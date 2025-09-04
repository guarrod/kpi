// Contenido enriquecido para el modal por KPI.
// Estructura esperada:
// {
//   [idKpi]: {
//     title: string,
//     subtitle?: string,
//     html: string // HTML seguro para inyectar en el modal
//   }
// }

// Nota: Aquí puedes pegar el contenido existente de detalle por KPI.
// Por ahora exportamos un objeto vacío y el wizard hará fallback
// al catálogo (título/categoría/desc/how) si no hay detalle.

const KPI_DETAILS = {
  // Ejemplos:
  adoption: {
  title: "Tasa de adopción",
  subtitle: "Mide la velocidad y amplitud de uso de nuevas funcionalidades o productos.",
  html: `
    <div class="space-y-4">
      <p>
        La <strong>Tasa de adopción</strong> refleja el porcentaje de usuarios o empresas que empiezan a utilizar una nueva
        funcionalidad o producto dentro de un periodo de tiempo específico (por ejemplo, durante las primeras 
        7, 14 o 30 días tras su lanzamiento). Es un indicador esencial para entender la aceptación inicial de 
        una novedad y evaluar si el esfuerzo de desarrollo está generando el impacto esperado.
      </p>

      <div>
        <p class="font-semibold">Fórmula:</p>
        <ul class="list-disc list-inside pl-2">
          <li>
            <code>Tasa de adopción (%) = (Número de usuarios que adoptan la nueva funcionalidad ÷ 
            Total de usuarios objetivo) × 100</code>
          </li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">¿Qué mide?</p>
        <ul class="list-disc list-inside pl-2">
          <li>La proporción de clientes que prueban o integran la nueva funcionalidad.</li>
          <li>La efectividad de las campañas de lanzamiento y comunicación.</li>
          <li>El nivel de interés real que genera una mejora o producto en la base de usuarios.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Interpretación:</p>
        <ul class="list-disc list-inside pl-2">
          <li>Una tasa <strong>alta</strong> indica que la innovación responde a una necesidad concreta y ofrece valor claro.</li>
          <li>Una tasa <strong>baja</strong> puede sugerir que los usuarios no perciben el beneficio, que la solución no es lo suficientemente simple, o que falta difusión interna/externa.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Frecuencia recomendada de medición:</p>
        <ul class="list-disc list-inside pl-2">
          <li>Semanal durante el primer mes tras el lanzamiento.</li>
          <li>Mensual para evaluar la consolidación del uso.</li>
        </ul>
      </div>
    </div>
  `
  },
  active: {
  title: "Usuarios activos (DAU/MAU)",
  subtitle: "Mide hábito y recurrencia de uso en ventanas diaria y mensual.",
  html: `
    <div class="space-y-4">
      <p>
        <strong>DAU</strong> (Daily Active Users) y <strong>MAU</strong> (Monthly Active Users) cuantifican cuántos
        usuarios únicos interactúan con el producto en un día o en un mes, respectivamente. En banca empresas,
        ayuda a entender si hay <em>hábito</em> y recurrencia de uso en tareas clave (p. ej., pagos, consultas de saldos).
      </p>

      <div>
        <p class="font-semibold">Definiciones:</p>
        <ul class="list-disc list-inside pl-2">
          <li><strong>DAU:</strong> Número de usuarios <em>únicos</em> que realizaron al menos una acción válida en un día (login, consulta, transacción, etc.).</li>
          <li><strong>MAU:</strong> Número de usuarios <em>únicos</em> que realizaron al menos una acción válida en los últimos 30 días.</li>
          <li><strong>Stickiness (DAU/MAU):</strong> Relación que aproxima la frecuencia de uso mensual. Un mayor valor sugiere hábito más fuerte.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Fórmulas:</p>
        <ul class="list-disc list-inside pl-2">
          <li><code>DAU = # usuarios únicos activos en D</code></li>
          <li><code>MAU = # usuarios únicos activos en últimos 30 días</code></li>
          <li><code>Stickiness (%) = (DAU ÷ MAU) × 100</code></li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">¿Qué mide?</p>
        <ul class="list-disc list-inside pl-2">
          <li>La magnitud de la base que realmente usa el canal digital (no solo registrada).</li>
          <li>La frecuencia/constancia con la que vuelven (stickiness).</li>
          <li>Impacto de lanzamientos o campañas en el uso recurrente (picos vs consolidación).</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Interpretación y señales:</p>
        <ul class="list-disc list-inside pl-2">
          <li><strong>DAU alto pero stickiness bajo:</strong> picos por eventos (p. ej. fin de mes) pero poco hábito diario.</li>
          <li><strong>MAU alto y stickiness creciente:</strong> adopción sostenida y más tareas recurrentes en digital.</li>
          <li><strong>Caídas bruscas:</strong> pueden indicar incidentes, fricción nueva o cambios en procesos (ej. token, KYC).</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Buenas prácticas de medición:</p>
        <ul class="list-disc list-inside pl-2">
          <li><strong>Evento de “usuario activo” claro:</strong> define qué cuenta como actividad válida (evitar solo “abrir app”).</li>
          <li><strong>Segmenta por empresa/rol:</strong> banca empresas tiene múltiples usuarios por cuenta; segmenta por rol (pagador, aprobador, visor).</li>
          <li><strong>Vista por módulo:</strong> DAU/MAU global + por funcionalidades clave (p. ej., Nómina, Transferencias exterior).</li>
          <li><strong>Normaliza por estacionalidad:</strong> compara semanas equivalentes y controla periodos de cierre/fin de mes.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Ejemplo:</p>
        <ul class="list-disc list-inside pl-2">
          <li>En septiembre: <code>MAU = 8.000</code> empresas/usuarios activos.</li>
          <li>Un día típico: <code>DAU = 2.000</code>.</li>
          <li><code>Stickiness = (2.000 ÷ 8.000) × 100 = 25%</code>.</li>
          <li>Si lanzas pagos masivos y sube a 2.600 DAU con 8.200 MAU, <code>stickiness = 31,7%</code> → hábito en alza.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Alertas y anti-patrones:</p>
        <ul class="list-disc list-inside pl-2">
          <li>No mezclar “usuarios registrados” con activos: son universos diferentes.</li>
          <li>Evitar contar sesiones múltiples del mismo usuario como usuarios distintos (asegura unicidad).</li>
          <li>No uses solo DAU o solo MAU: la relación DAU/MAU evita lecturas sesgadas.</li>
        </ul>
      </div>
    </div>
    `
  },
  activation: {
  title: "Tasa de activación",
  subtitle: "Del registro al primer valor: ¿cuántos llegan a su primera acción clave?",
  html: `
    <div class="space-y-4">
      <p>
        La <strong>Tasa de activación</strong> mide el porcentaje de usuarios/empresas que,
        tras <em>registrarse o habilitar acceso</em>, completan su <strong>primera acción de valor</strong>
        (p. ej., realizar un pago, cargar nómina, aprobar una transferencia, descargar un estado con éxito).
        Es un indicador de si el onboarding y el flujo inicial realmente conducen a valor.
      </p>

      <div>
        <p class="font-semibold">Definiciones clave:</p>
        <ul class="list-disc list-inside pl-2">
          <li><strong>Evento de activación:</strong> la <em>primera</em> acción que demuestra valor real (no solo login). Debe ser única, medible y trazable.</li>
          <li><strong>Ventana de activación:</strong> tiempo máximo considerado desde el alta (p. ej., 7, 14 o 30 días) para contar una activación como válida.</li>
          <li><strong>Unidad de medida:</strong> por <em>usuario</em> o por <em>empresa</em> (en banca empresas suele medirse a nivel de empresa <em>y</em> a nivel de roles: pagador, aprobador, visor).</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Fórmula:</p>
        <ul class="list-disc list-inside pl-2">
          <li>
            <code>Tasa de activación (%) = (Nº de cuentas/usuarios que completan el evento de activación dentro de la ventana ÷ Nº total de nuevos registrados/habilitados) × 100</code>
          </li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">¿Qué mide?</p>
        <ul class="list-disc list-inside pl-2">
          <li>La eficacia del onboarding (configuración de token, permisos, límites, KYC) para llevar a la primera acción de valor.</li>
          <li>La claridad del valor percibido del canal digital para empresas.</li>
          <li>La facilidad de descubrir y ejecutar el flujo inicial clave (p. ej., “pago simple” o “carga de nómina”).</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Interpretación:</p>
        <ul class="list-disc list-inside pl-2">
          <li><strong>Alta activación:</strong> buen onboarding + propuesta de valor clara + fricción baja en el primer flujo.</li>
          <li><strong>Baja activación:</strong> señales de fricción (tokenización, permisos, aprobaciones), valor poco visible, o ventana demasiado corta.</li>
          <li><strong>Tiempo a activación (TTA):</strong> usarlo como complemento: días/horas promedio al primer evento de valor.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Buenas prácticas de medición:</p>
        <ul class="list-disc list-inside pl-2">
          <li>Define <em>un</em> evento de activación por módulo (p. ej., en nómina “archivo cargado y pago confirmado”).</li>
          <li>Segmenta por <strong>rol</strong> (pagador, aprobador) y por <strong>tamaño de empresa</strong> (micro, pyme, corporativa).</li>
          <li>Elige una <strong>ventana realista</strong> según el ciclo del cliente (p. ej., 14 días para pagos, 30 días para nómina).</li>
          <li>Complementa con <strong>embudo de activación</strong> (alta → token → permisos → primera transacción).</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Ejemplo (empresa):</p>
        <ul class="list-disc list-inside pl-2">
          <li>En 30 días: 1.000 empresas habilitadas.</li>
          <li>Dentro de 14 días: 620 realizan su primer pago o cargan nómina con éxito.</li>
          <li><code>Tasa de activación = (620 ÷ 1.000) × 100 = 62%</code>.</li>
          <li>Si el <em>Tiempo a activación</em> promedio baja de 6 a 3 días tras mejoras de onboarding, vamos en la dirección correcta.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Alertas y anti-patrones:</p>
        <ul class="list-disc list-inside pl-2">
          <li>No contar <strong>login</strong> como activación; debe ser una acción de valor.</li>
          <li>Evitar <strong>ventanas</strong> demasiado cortas (subestiman activación) o demasiado largas (diluyen lectura).</li>
          <li>Cuidado con <strong>duplicados</strong> (múltiples usuarios por empresa) y con <strong>eventos técnicos</strong> que marcan éxito sin que el usuario lo perciba.</li>
        </ul>
      </div>
    </div>
  `
  },
  featureUsage: {
  title: "Uso por funcionalidad",
  subtitle: "Profundidad de uso: ¿qué tanto se usan los distintos módulos?",
  html: `
    <div class="space-y-4">
      <p>
        El KPI de <strong>Uso por funcionalidad</strong> mide el porcentaje de sesiones o usuarios
        que utilizan una funcionalidad específica del producto (ej. pagos masivos, transferencias
        internacionales, descarga de certificados). Permite identificar qué módulos generan más
        valor y cuáles pueden estar infrautilizados.
      </p>

      <div>
        <p class="font-semibold">Definición:</p>
        <ul class="list-disc list-inside pl-2">
          <li>Porcentaje de usuarios o sesiones que usan una funcionalidad sobre el total de usuarios o sesiones en un periodo dado.</li>
          <li>Puede medirse por <em>usuario único</em> (empresas que al menos una vez usaron la función) o por <em>sesiones</em> (veces que la función fue usada en relación al total de sesiones).</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Fórmula:</p>
        <ul class="list-disc list-inside pl-2">
          <li>
            <code>Uso funcionalidad (%) = (Nº de usuarios/sesiones que usaron la funcionalidad ÷ Nº total de usuarios/sesiones en el periodo) × 100</code>
          </li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">¿Qué mide?</p>
        <ul class="list-disc list-inside pl-2">
          <li>El nivel de adopción y relevancia de cada módulo de la banca empresas.</li>
          <li>La efectividad de las campañas de comunicación o lanzamientos de nuevas funciones.</li>
          <li>Oportunidades de simplificación: funcionalidades críticas con bajo uso pueden indicar problemas de discoverability o complejidad.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Interpretación:</p>
        <ul class="list-disc list-inside pl-2">
          <li><strong>Alto uso:</strong> la funcionalidad es percibida como valiosa y probablemente resuelve una necesidad recurrente.</li>
          <li><strong>Bajo uso:</strong> puede deberse a que los usuarios no conocen la función, no confían en ella o encuentran fricción en el acceso.</li>
          <li>Un cambio en la interfaz que aumenta el uso puede ser evidencia de mejora en la experiencia de descubrimiento.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Buenas prácticas:</p>
        <ul class="list-disc list-inside pl-2">
          <li>Medir el uso por <strong>segmento</strong> (tipo de empresa, rol de usuario, sector).</li>
          <li>Complementar con <strong>encuestas cualitativas</strong> para entender por qué no se usa una función crítica.</li>
          <li>Relacionar con métricas de <strong>adopción y retención</strong> para identificar correlaciones (ej. empresas que usan 3+ funcionalidades tienden a quedarse más tiempo).</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Ejemplo:</p>
        <ul class="list-disc list-inside pl-2">
          <li>En un mes: 10.000 usuarios activos en banca empresas.</li>
          <li>De ellos, 3.200 usaron la funcionalidad “pagos masivos”.</li>
          <li><code>Uso pagos masivos = (3.200 ÷ 10.000) × 100 = 32%</code>.</li>
          <li>Si tras mejorar la visibilidad del acceso sube a 4.800 usuarios, el uso escala a 48% → evidencia de impacto positivo.</li>
        </ul>
      </div>
    </div>
  `
  },
  timeOnTask: {
  title: "Tiempo en tarea",
  subtitle: "Eficiencia y fricción: ¿cuánto tarda un usuario en completar una acción clave?",
  html: `
    <div class="space-y-4">
      <p>
        El KPI de <strong>Tiempo en tarea</strong> mide la duración promedio que un usuario emplea
        para completar un flujo o acción clave en el sistema (ej. realizar una transferencia,
        cargar nómina, descargar un estado de cuenta). Es un indicador central de eficiencia y
        facilidad de uso.
      </p>

      <div>
        <p class="font-semibold">Definición:</p>
        <ul class="list-disc list-inside pl-2">
          <li>Tiempo promedio (mediana p50 y, opcionalmente, percentil p90) desde el inicio hasta la confirmación de una tarea.</li>
          <li>Se mide en segundos o minutos, dependiendo del tipo de flujo.</li>
          <li>Debe excluir tiempos de inactividad prolongada para no sesgar el dato.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Fórmula:</p>
        <ul class="list-disc list-inside pl-2">
          <li>
            <code>Tiempo en tarea = (Σ tiempos de finalización de la tarea ÷ Nº de tareas completadas)</code>
          </li>
          <li>Recomendado: reportar <code>p50</code> y <code>p90</code> en lugar de solo el promedio, para reflejar variabilidad.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">¿Qué mide?</p>
        <ul class="list-disc list-inside pl-2">
          <li>La eficiencia del flujo de usuario.</li>
          <li>La claridad de la interfaz y los pasos necesarios para completar la acción.</li>
          <li>El impacto de cambios en diseño o performance en la productividad del usuario.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Interpretación:</p>
        <ul class="list-disc list-inside pl-2">
          <li><strong>Tiempos bajos:</strong> procesos optimizados y simples.</li>
          <li><strong>Tiempos altos:</strong> indicio de fricción, pasos innecesarios, carga lenta o errores frecuentes.</li>
          <li>Comparar entre <strong>nuevos</strong> y <strong>usuarios recurrentes</strong> ayuda a detectar problemas de aprendizaje vs problemas de diseño.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Buenas prácticas de medición:</p>
        <ul class="list-disc list-inside pl-2">
          <li>Definir claramente inicio y fin de cada tarea (ej. clic en “Nueva transferencia” → confirmación exitosa).</li>
          <li>Registrar tanto el <strong>tiempo activo</strong> como los posibles <strong>tiempos de espera del sistema</strong>.</li>
          <li>Complementar con <strong>eventos de error</strong> para detectar si los tiempos altos están vinculados a fallos.</li>
          <li>Comparar después de <strong>rediseños o mejoras</strong> para validar impacto.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Ejemplo:</p>
        <ul class="list-disc list-inside pl-2">
          <li>En un mes: 1.200 operaciones de carga de nómina.</li>
          <li>Mediana (p50): 2 min 10 s.</li>
          <li>Percentil 90 (p90): 4 min 30 s.</li>
          <li>Tras optimizar validaciones, el p50 bajó a 1 min 20 s y el p90 a 2 min 45 s → evidencia clara de mejora en eficiencia.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Alertas y anti-patrones:</p>
        <ul class="list-disc list-inside pl-2">
          <li>No confundir tiempo bajo con buena experiencia: un tiempo muy corto puede indicar que el usuario abandonó o cometió un error sin completar.</li>
          <li>No usar solo promedio: puede ocultar casos extremos donde pocos usuarios sufren fricción severa.</li>
        </ul>
      </div>
    </div>
  `
  },
  success: {
  title: "Tasa de éxito",
  subtitle: "Eficiencia & Fricción: ¿cuántas operaciones se completan sin problemas?",
  html: `
    <div class="space-y-4">
      <p>
        La <strong>Tasa de éxito</strong> mide el porcentaje de operaciones o tareas que los usuarios logran
        completar sin errores, bloqueos o necesidad de repetir pasos. En banca empresas es un KPI clave
        para evaluar la <em>confiabilidad y usabilidad de los flujos críticos</em> como transferencias,
        pagos masivos o apertura de cuentas.
      </p>

      <div>
        <p class="font-semibold">Definición:</p>
        <ul class="list-disc list-inside pl-2">
          <li>Proporción de operaciones iniciadas que llegan a completarse correctamente.</li>
          <li>Se considera éxito cuando el sistema confirma la operación y el usuario percibe que se logró el objetivo.</li>
          <li>Incluye la reducción de <strong>reintentos</strong> y de errores de validación o técnicos.</li>\n          </ul>
      </div>

      <div>
        <p class="font-semibold">Fórmula:</p>
        <ul class="list-disc list-inside pl-2">
          <li><code>Tasa de éxito (%) = (Nº de operaciones completadas exitosamente ÷ Nº total de operaciones iniciadas) × 100</code></li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">¿Qué mide?</p>
        <ul class="list-disc list-inside pl-2">
          <li>La capacidad del sistema para permitir que los usuarios completen sus objetivos.</li>
          <li>La solidez de los flujos de negocio frente a fricciones técnicas o de diseño.</li>
          <li>El impacto de mejoras de UX en la reducción de errores y caídas.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Interpretación:</p>
        <ul class="list-disc list-inside pl-2">
          <li><strong>Tasa alta (&gt;95%):</strong> indica que la mayoría de los usuarios logran completar sus operaciones sin problemas.</li>
          <li><strong>Tasa baja (&lt;90%):</strong> alerta sobre fricciones críticas: errores técnicos, validaciones confusas, problemas de diseño o flujos poco claros.</li>
          <li>Un aumento sostenido en la tasa tras un rediseño es evidencia fuerte de mejora de la experiencia.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Buenas prácticas:</p>
        <ul class="list-disc list-inside pl-2">
          <li>Definir con claridad qué cuenta como “éxito” en cada flujo (ej. transferencia confirmada, nómina procesada sin rechazos).</li>
          <li>Separar causas de fallos: <em>errores del usuario</em> (datos mal ingresados) vs <em>errores técnicos</em> (servidor, red, token).</li>
          <li>Analizar éxito por segmento (empresa grande, pyme, rol del usuario) para detectar dónde falla más.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Ejemplo:</p>
        <ul class="list-disc list-inside pl-2">
          <li>En un mes: 5.000 transferencias iniciadas.</li>
          <li>De ellas, 4.600 llegaron a confirmación exitosa.</li>
          <li><code>Tasa de éxito = (4.600 ÷ 5.000) × 100 = 92%</code>.</li>
          <li>Tras simplificar el formulario de transferencia, la tasa sube a 97% → se reducen los errores de digitación.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Alertas y anti-patrones:</p>
        <ul class="list-disc list-inside pl-2">
          <li>No basta con contar intentos: se debe medir hasta el final del flujo (ej. confirmación de operación).</li>
          <li>Evitar considerar “guardado en borradores” como éxito; el KPI debe reflejar valor real entregado al usuario.</li>
          <li>Si la tasa baja repentinamente, cruzar con métricas técnicas (latencia, uptime) para detectar la causa raíz.</li>
        </ul>
      </div>
    </div>
  `
  },
  steps: {
  title: "Pasos por tarea",
  subtitle: "Eficiencia & Fricción: mide la simplicidad de los flujos",
  html: `
    <div class="space-y-4">
      <p>
        El KPI <strong>Pasos por tarea</strong> cuantifica la cantidad de pantallas, clics o interacciones 
        que necesita un usuario para completar una acción específica dentro del producto digital. 
        Es un indicador directo de la <em>eficiencia y simplicidad de los flujos</em>.
      </p>

      <div>
        <p class="font-semibold">Definición:</p>
        <ul class="list-disc list-inside pl-2">
          <li>Cuenta de pantallas o interacciones necesarias para completar un flujo de inicio a fin.</li>
          <li>Puede medirse en clics, pantallas o campos requeridos según el diseño del producto.</li>
          <li>Se recomienda medir tanto el <em>mínimo teórico</em> como el <em>promedio real</em> que siguen los usuarios.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Fórmula:</p>
        <ul class="list-disc list-inside pl-2">
          <li>
            <code>Pasos promedio = (Suma de pasos de todos los usuarios que completaron la tarea ÷ Total de usuarios que completaron la tarea)</code>
          </li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">¿Qué mide?</p>
        <ul class="list-disc list-inside pl-2">
          <li>La fricción percibida en el recorrido de una tarea.</li>
          <li>La eficiencia del diseño y si se está pidiendo información redundante.</li>
          <li>La oportunidad de optimizar flujos para reducir complejidad.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Interpretación:</p>
        <ul class="list-disc list-inside pl-2">
          <li><strong>Pocos pasos:</strong> generalmente indica simplicidad y mayor probabilidad de éxito.</li>
          <li><strong>Muchos pasos:</strong> suele correlacionarse con más abandonos, errores y frustración.</li>
          <li>En banca, algunos pasos adicionales son inevitables (ej. autenticación, doble aprobación), por lo que el benchmark debe considerar <em>regulación</em> y <em>seguridad</em>.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Buenas prácticas:</p>
        <ul class="list-disc list-inside pl-2">
          <li>Identificar pasos que no aportan valor y eliminarlos o automatizarlos.</li>
          <li>Diferenciar pasos <em>obligatorios</em> por seguridad/regulación de pasos <em>opcionales</em> o redundantes.</li>
          <li>Analizar por segmentos de empresa: grandes corporativos suelen requerir más pasos por controles internos (ej. doble firma).</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Ejemplo:</p>
        <ul class="list-disc list-inside pl-2">
          <li>Flujo actual de <strong>transferencia simple</strong>: 7 pasos (seleccionar cuenta, ingresar monto, beneficiario, descripción, confirmar, token, recibo).</li>
          <li>Se optimiza a 5 pasos eliminando campos redundantes y precargando datos.</li>
          <li><code>Pasos promedio antes = 7</code> → <code>Pasos promedio después = 5</code>.</li>
          <li>El abandono se reduce de 12% a 6% tras simplificar el flujo.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Alertas y anti-patrones:</p>
        <ul class="list-disc list-inside pl-2">
          <li>No medir solo el flujo teórico; en la práctica los usuarios pueden repetir pasos o retroceder.</li>
          <li>No todos los pasos pesan igual: algunos son rápidos (un clic) y otros más costosos (llenar formularios largos).</li>
          <li>Cuidado con eliminar pasos críticos de seguridad solo para “bajar el número”; la clave es optimizar sin comprometer confianza.</li>
        </ul>
      </div>
    </div>
  `
  },
  abandon: {
  title: "Tasa de abandono",
  subtitle: "Eficiencia & Fricción: ¿dónde y cuánto se caen los usuarios en el flujo?",
  html: `
    <div class="space-y-4">
      <p>
        La <strong>Tasa de abandono</strong> cuantifica el porcentaje de usuarios/empresas que inician un flujo
        (p. ej., transferencia, pagos masivos, registro) pero no lo completan. Es un indicador crítico
        de <em>fricción</em> y suele correlacionar con complejidad, tiempos altos o errores de validación/técnicos.
      </p>

      <div>
        <p class="font-semibold">Definición:</p>
        <ul class="list-disc list-inside pl-2">
          <li>Proporción de instancias iniciadas que no alcanzan el estado de confirmación/éxito.</li>
          <li>Puede medirse a nivel de flujo completo o por <em>paso del embudo</em> para localizar el punto exacto de caída.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Fórmula:</p>
        <ul class="list-disc list-inside pl-2">
          <li>
            <code>Tasa de abandono (%) = (Nº de operaciones iniciadas no completadas ÷ Nº total de operaciones iniciadas) × 100</code>
          </li>
          <li>
            <code>Abandono por paso (%) = (Nº que pasan por el paso i y no llegan al i+1 ÷ Nº que llegan al paso i) × 100</code>
          </li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">¿Qué mide?</p>
        <ul class="list-disc list-inside pl-2">
          <li>La fricción real en formularios, validaciones, autenticación (token/2FA) y tiempos de espera.</li>
          <li>La claridad del flujo (campos, instrucciones, estados de error).</li>
          <li>El impacto de incidentes técnicos (timeouts, caídas) en la continuidad del proceso.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Interpretación:</p>
        <ul class="list-disc list-inside pl-2">
          <li><strong>Abandono alto</strong> suele indicar excesivos pasos/campos, latencia elevada o mensajes de error poco accionables.</li>
          <li><strong>Disminuciones</strong> tras un rediseño son evidencia de mejora; contrástalo con <em>Tasa de éxito</em> y <em>Tiempo en tarea</em>.</li>
          <li>Analiza <em>por segmento</em> (rol, tamaño de empresa) para detectar fricciones específicas.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Buenas prácticas de medición:</p>
        <ul class="list-disc list-inside pl-2">
          <li>Instrumentar el <strong>embudo paso a paso</strong> (inicio → datos → revisión → confirmación) para ubicar el escalón de fuga.</li>
          <li>Registrar <strong>causas de salida</strong> (cerró pestaña, error 4xx/5xx, validación fallida, timeout).</li>
          <li>Separar <strong>abandono voluntario</strong> (desistimiento) de <strong>forzado</strong> (error técnico/autenticación).</li>
          <li>Controlar <strong>estacionalidad</strong> (fin de mes, horarios críticos) al comparar periodos.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Ejemplo:</p>
        <ul class="list-disc list-inside pl-2">
          <li>Mes actual: 10.000 transferencias iniciadas; 1.300 no llegan a confirmación.</li>
          <li><code>Abandono total = (1.300 ÷ 10.000) × 100 = 13%</code>.</li>
          <li>Embudo muestra que el 60% de los abandonos sucede en el paso de <em>token</em> (2FA) → priorizar mejora de UX del token y latencia.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Alertas y anti-patrones:</p>
        <ul class="list-disc list-inside pl-2">
          <li>No mezclar <strong>abandono</strong> con <strong>rechazos posteriores</strong> (p. ej., control antifraude) si la UX ya confirmó al usuario.</li>
          <li>Evitar promediar todo el embudo: el valor por paso es el que habilita acciones concretas.</li>
          <li>Si el abandono sube, cruza con <em>Tiempo de respuesta</em>, <em>Errores 4xx/5xx</em> e <em>Interrupciones</em> para hallar causa raíz.</li>
        </ul>
      </div>
    </div>
  `
  },
  userError: {
  title: "Errores de usuario/flujo",
  subtitle: "Eficiencia & Fricción: validaciones y pasos que rompen la tarea para el cliente",
  html: `
  <div class="space-y-4">
    <p>
      <strong>Errores de usuario/flujo</strong> cuantifica los fallos que enfrentan los usuarios al completar
      una tarea por causas de <em>flujo/UX</em> (validaciones confusas, campos obligatorios poco claros, 
      formatos estrictos, pasos redundantes) más que por incidentes puramente técnicos (4xx/5xx).
    </p>

    <div>
      <p class="font-semibold">Definición:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Errores originados por interacción o diseño: validaciones, formatos, permisos, límites y reglas de negocio.</li>
        <li>No incluye caídas del servidor ni timeouts (eso va a <em>Errores 4xx/5xx</em> o <em>Interrupciones</em>).</li>
        <li>Se mide por flujo (ej. transferencias, pagos masivos, altas) y por paso del embudo.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplos comunes en banca empresas:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>Validación de campos:</strong> formato de cuenta, RUC/NIT, email, monto con separadores.</li>
        <li><strong>Reglas de negocio:</strong> límites diarios superados, beneficiario no habilitado, rol sin permisos.</li>
        <li><strong>Autenticación de paso:</strong> token/2FA ingresado fuera de ventana de tiempo.</li>
        <li><strong>Archivos:</strong> planilla de nómina con columnas inválidas, extensiones no permitidas.</li>
        <li><strong>Flujo:</strong> usuarios que retroceden por no entender el orden aprobación–confirmación.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Fórmulas:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>Tasa de errores de usuario (%) = (Nº de intentos con error de usuario ÷ Nº total de intentos) × 100</code></li>
        <li><code>Errores por 1.000 ops = (Nº de errores de usuario ÷ Nº de operaciones) × 1.000</code></li>
        <li><code>Top-errores = ranking por tipo de error (validación, permiso, límite, formato…)</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">¿Qué mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>Claridad de formularios, mensajes y reglas de negocio en el flujo.</li>
        <li>Descubribilidad de requisitos (ej. habilitar beneficiario antes de transferir).</li>
        <li>Madurez del diseño para prevenir errores (más que solo reportarlos).</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretación:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>Alta tasa de errores de usuario</strong> suele correlacionar con <em>abandono</em> y menor <em>tasa de éxito</em>.</li>
        <li>Si los errores caen y la <em>tasa de éxito</em> sube, el flujo ganó claridad y robustez.</li>
        <li>Analizar por <em>paso</em> del embudo y <em>rol</em> (pagador, aprobador, visor) para acciones precisas.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas prácticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>Instrumentación granular:</strong> evento por tipo de error y por campo (ej. <code>error: monto_formato</code>).</li>
        <li><strong>Mensajes accionables:</strong> indicar qué falló y cómo resolver (ej. formato requerido, enlace a habilitar beneficiario).</li>
        <li><strong>Prevención:</strong> máscaras de entrada, autocompletado, validación en tiempo real, defaults inteligentes.</li>
        <li><strong>Segmentación:</strong> por tamaño de empresa/rol y por dispositivo (web vs. móvil).</li>
        <li><strong>Loop con soporte:</strong> mapear los errores top con tickets/FAQs para cerrar brechas de contenido.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Mes: 20.000 intentos de transferencia; 1.200 con errores de usuario.</li>
        <li><code>Tasa de errores = (1.200 ÷ 20.000) × 100 = 6%</code>; los top-errores son <em>formato de cuenta</em> (35%) y <em>límite excedido</em> (28%).</li>
        <li>Tras mejorar validación en vivo y explicar límites disponibles, la tasa baja a 3,2% y la <em>tasa de éxito</em> sube 4 pp.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No mezclar con <strong>errores técnicos</strong>; separa ambos para intervenir correctamente.</li>
        <li>Evita mensajes genéricos (“Error desconocido”): impiden aprendizaje y acción.</li>
        <li>Si un mismo error concentra &gt;20% de los casos, priorízalo como épica de UX/negocio.</li>
      </ul>
    </div>
  </div>
  `
  },
  latency: {
  title: "Tiempo de respuesta",
  subtitle: "Eficiencia & Fricción: rapidez del sistema al ejecutar acciones clave",
  html: `
  <div class="space-y-4">
    <p>
      El KPI <strong>Tiempo de respuesta</strong> mide cuánto tarda el sistema en mostrar la
      respuesta o confirmar una acción tras la interacción del usuario. En banca empresas,
      es crítico porque impacta directamente en la <em>percepción de eficiencia y confianza</em>
      en procesos como transferencias, pagos masivos o consultas de saldos.
    </p>

    <div>
      <p class="font-semibold">Definición:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Tiempo promedio en milisegundos o segundos que tarda en responder un servicio, endpoint o pantalla tras la acción del usuario.</li>
        <li>Se mide tanto en <em>frontend</em> (renderizado, carga de pantalla) como en <em>backend</em> (respuesta de APIs, servicios).</li>
        <li>Se recomienda separar <strong>tiempo de respuesta percibido</strong> (lo que ve el cliente) del <strong>tiempo técnico</strong> (logs del sistema).</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Fórmulas:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>Tiempo promedio de respuesta = Σ tiempos de respuesta ÷ Nº de solicitudes</code></li>
        <li><code>Percentil P90 = tiempo por debajo del cual responden el 90% de las solicitudes</code></li>
        <li><code>Percentil P95 = tiempo por debajo del cual responden el 95% de las solicitudes</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">¿Qué mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La rapidez del sistema para ejecutar operaciones críticas.</li>
        <li>La estabilidad en picos de carga (ej. fin de mes, días de pago de nómina).</li>
        <li>El impacto de la latencia en el abandono de flujos.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretación:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>&lt;1s:</strong> excelente, experiencia fluida.</li>
        <li><strong>1–3s:</strong> aceptable en banca, aunque puede sentirse lento en consultas simples.</li>
        <li><strong>&gt;3s:</strong> alto riesgo de frustración y abandono, sobre todo en acciones frecuentes como consultar saldos.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas prácticas de medición:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Medir tanto promedio como percentiles (P90/P95) para detectar problemas en los peores escenarios.</li>
        <li>Incluir medición <strong>end-to-end</strong> (desde clic hasta render final), no solo tiempos de servidor.</li>
        <li>Segregar por tipo de flujo: consultas (rápidas), operaciones de carga (más complejas).</li>
        <li>Comparar <strong>latencia percibida</strong> con feedback de usuarios para validar la experiencia real.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Consulta de saldos: promedio 1.2s, P90 = 2.1s → aceptable.</li>
        <li>Transferencia internacional: promedio 4.5s, P95 = 7s → alto riesgo de frustración.</li>
        <li>Tras optimizar APIs, bajamos a 2.8s promedio y 4.5s P95 → mejora notable en la experiencia.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No reportar solo promedios: pueden ocultar casos críticos de lentitud.</li>
        <li>Evitar medir solo backend; el usuario percibe la suma de <em>todo el ciclo</em> (front + red + backend).</li>
        <li>No descuidar picos de carga: un servicio estable en horario normal puede colapsar en cierres de nómina.</li>
      </ul>
    </div>
  </div>
  `
  },
  interruption: {
  title: "Transacciones interrumpidas",
  subtitle: "Eficiencia & Fricción: operaciones que no concluyen por caídas o timeouts",
  html: `
  <div class="space-y-4">
    <p>
      El KPI <strong>Transacciones interrumpidas</strong> mide el porcentaje de operaciones
      que fueron iniciadas pero no llegaron a completarse debido a problemas técnicos como 
      <em>timeouts</em>, caídas de red, errores de comunicación con sistemas externos o interrupciones 
      inesperadas en el flujo.
    </p>

    <div>
      <p class="font-semibold">Definición:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Operaciones abandonadas de forma no voluntaria por parte del usuario.</li>
        <li>Incluye fallos en APIs, desconexiones, expiraciones de sesión y errores de infraestructura.</li>
        <li>No deben confundirse con abandonos voluntarios (usuario cierra el flujo o decide no continuar).</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Fórmulas:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>Tasa de interrupciones (%) = (Nº de transacciones interrumpidas ÷ Nº total de transacciones iniciadas) × 100</code></li>
        <li><code>Interrupciones por 1.000 ops = (Nº de interrupciones ÷ Nº total de operaciones) × 1.000</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">¿Qué mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La estabilidad real de los flujos críticos de negocio.</li>
        <li>El impacto de fallos técnicos en la experiencia y la confianza del cliente.</li>
        <li>Riesgo de pérdida de operaciones valiosas (p. ej., transferencias de alto monto, pagos masivos).</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretación:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>Baja tasa (&lt;1%):</strong> esperada en sistemas bancarios estables.</li>
        <li><strong>Tasa media (1–3%):</strong> indica problemas localizados (ej. picos de carga, integración con un servicio externo).</li>
        <li><strong>Tasa alta (&gt;5%):</strong> alerta roja: genera pérdida de confianza y potencial reclamo/regulación.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas prácticas de medición:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Registrar <strong>código de error</strong> y <strong>momento del flujo</strong> donde ocurrió la interrupción.</li>
        <li>Diferenciar interrupciones <em>recuperables</em> (ej. reintento automático exitoso) de las <em>críticas</em> (usuario perdió la operación).</li>
        <li>Medir <strong>por módulo</strong> (ej. nómina vs transferencias internacionales) para ubicar la causa raíz.</li>
        <li>Cruzar con <em>latencia</em> y <em>errores técnicos</em> para encontrar correlaciones.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Mes: 15.000 transferencias iniciadas.</li>
        <li>De ellas, 450 se interrumpieron por timeout o caída.</li>
        <li><code>Tasa de interrupciones = (450 ÷ 15.000) × 100 = 3%</code>.</li>
        <li>El 70% ocurrió en horario de cierre de nómina → indicador de necesidad de escalar infraestructura.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No mezclar con <strong>abandono</strong>: deben medirse por separado.</li>
        <li>Evitar ocultar interrupciones en promedios de éxito; deben tener su propio KPI.</li>
        <li>Si los reintentos automáticos superan el 10%, considerar rediseño o mejora en capacidad del sistema.</li>
      </ul>
    </div>
  </div>
  `
  },
  nps: {
  title: "NPS (Net Promoter Score)",
  subtitle: "Satisfacción & Experiencia: ¿nos recomendarían a un colega/empresa?",
  html: `
  <div class="space-y-4">
    <p>
      El <strong>NPS</strong> estima la lealtad e intención de recomendación del cliente. 
      En banca empresas se usa para entender, tras una interacción o en general, 
      si una compañía recomendaría el canal digital a otra empresa/colega.
    </p>

    <div>
      <p class="font-semibold">Pregunta estándar:</p>
      <ul class="list-disc list-inside pl-2">
        <li>“Del 0 al 10, ¿qué tan probable es que recomiendes nuestra banca empresas a un colega?”</li>
        <li>Se clasifica la respuesta en:
          <ul class="list-disc list-inside pl-6">
            <li><strong>Promotores:</strong> 9–10</li>
            <li><strong>Pasivos:</strong> 7–8</li>
            <li><strong>Detractores:</strong> 0–6</li>
          </ul>
        </li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Fórmula:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>NPS = (% Promotores) − (% Detractores)</code> → rango de −100 a +100</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Tipos de NPS:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>Relacional:</strong> percepción general del canal (medición periódica: trimestral/mensual).</li>
        <li><strong>Transaccional:</strong> posterior a un flujo específico (ej. pagos masivos, transferencias al exterior) para detectar fricción puntual.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">¿Qué mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>Lealtad y probabilidad de recomendación (proxy de crecimiento orgánico).</li>
        <li>Impacto de mejoras o incidentes en la experiencia percibida.</li>
        <li>Brechas entre módulos (comparar NPS por funcionalidad/flujo).</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretación (guía general):</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>&gt;= 50:</strong> excelente (experiencia muy sólida).</li>
        <li><strong>0 a 49:</strong> bueno/aceptable con oportunidades claras.</li>
        <li><strong>&lt; 0:</strong> alerta: predominan experiencias negativas.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas prácticas en banca empresas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Acompañar con pregunta abierta: “¿Cuál fue la principal razón de tu puntuación?” para accionar.</li>
        <li>Segmentar por <strong>rol</strong> (pagador, aprobador, visor) y <strong>tamaño de empresa</strong>.</li>
        <li>Detonar NPS transaccional solo tras <em>éxito o fallo</em> del flujo para entender diferencias.</li>
        <li>Vincular NPS con métricas operativas (latencia, errores, tasa de éxito) para causa raíz.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo de cálculo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Encuestas válidas: 400. Promotores: 200 (50%), Pasivos: 120 (30%), Detractores: 80 (20%).</li>
        <li><code>NPS = 50% − 20% = +30</code> (bueno, con margen de mejora).</li>
        <li>Tras optimizar token en pagos masivos, los detractores bajan a 10% → <code>NPS = 50% − 10% = +40</code>.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No usar NPS aislado: complementarlo con <em>CSAT</em>, <em>CES</em> y métricas del flujo.</li>
        <li>Evitar muestras sesgadas (solo quienes completaron con éxito); incluir fallos/cancelaciones.</li>
        <li>Cuidar la frecuencia: demasiado NPS puede fatigar y bajar la tasa de respuesta.</li>
      </ul>
    </div>
  </div>
  `
  },
  csat: {
  title: "CSAT (Customer Satisfaction)",
  subtitle: "Satisfacción & Experiencia: satisfacción inmediata tras una interacción",
  html: `
  <div class="space-y-4">
    <p>
      <strong>CSAT</strong> mide la satisfacción percibida por el usuario justo después de una interacción
      o flujo específico (p. ej., consulta de saldos, transferencia, carga de nómina). Es un indicador
      táctico y de lectura rápida sobre cómo se sintió la experiencia <em>en ese momento</em>.
    </p>

    <div>
      <p class="font-semibold">Pregunta típica:</p>
      <ul class="list-disc list-inside pl-2">
        <li>“En una escala de 1 a 5, ¿qué tan satisfecho quedaste con [este proceso/flujo]?”</li>
        <li>Escala común: 1 = Muy insatisfecho … 5 = Muy satisfecho.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Fórmulas más usadas:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>CSAT promedio = (Σ puntuaciones) ÷ (# de respuestas)</code>  → en escala 1–5.</li>
        <li><code>CSAT Top-2 (%) = ((# de respuestas con 4 o 5) ÷ # total de respuestas) × 100</code></li>
        <li><code>Tasa de respuesta = (# de encuestas contestadas ÷ # de invitaciones) × 100</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">¿Qué mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La percepción inmediata de calidad y facilidad del flujo.</li>
        <li>El impacto de fricciones puntuales (latencia, validaciones, token) en la satisfacción.</li>
        <li>Diferencias entre módulos o segmentos (rol, tamaño de empresa).</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretación (guía general):</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>CSAT Top-2 ≥ 85%:</strong> experiencia muy satisfactoria.</li>
        <li><strong>70–84%:</strong> aceptable, con oportunidades de mejora.</li>
        <li><strong>&lt; 70%:</strong> alerta: revisar fricciones y causa raíz.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas prácticas en banca empresas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Disparar CSAT <em>transaccional</em> al final de flujos críticos (p. ej., transferencia confirmada).</li>
        <li>Incluir una <strong>pregunta abierta</strong> opcional (“¿Qué podemos mejorar?”) para accionar.</li>
        <li>Segmentar por <strong>rol</strong> (pagador, aprobador, visor) y por <strong>módulo</strong>.</li>
        <li>Controlar <strong>sesgo de éxito</strong>: también medir cuando el flujo falla o se aborta.</li>
        <li>Cruzar CSAT con <em>latencia</em>, <em>errores</em> y <em>tasa de éxito</em> para diagnóstico.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Respuestas: 600. Con “4 o 5”: 468 → <code>CSAT Top-2 = (468 ÷ 600) × 100 = 78%</code>.</li>
        <li>Tras optimizar validaciones en el formulario de transferencias, Top-2 sube a 86% y el tiempo en tarea baja 25%.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No usar CSAT solo: complementa con <strong>NPS</strong> (lealtad) y <strong>CES</strong> (esfuerzo).</li>
        <li>Evitar encuestas excesivas que bajen la tasa de respuesta.</li>
        <li>No mezclar preguntas o escalas diferentes en el tiempo sin recalibrar históricos.</li>
      </ul>
    </div>
  </div>
  `
  },
  sus: {
  title: "SUS (System Usability Scale)",
  subtitle: "Satisfacción & Experiencia: escala estandarizada de usabilidad percibida",
  html: `
  <div class="space-y-4">
    <p>
      El <strong>SUS</strong> es una encuesta estandarizada de 10 ítems creada por John Brooke en 1986,
      ampliamente usada para medir la <em>usabilidad percibida</em> de un sistema digital.
      Proporciona un puntaje de 0 a 100 que resume la experiencia del usuario en términos de 
      facilidad de uso, consistencia y confianza.
    </p>

    <div>
      <p class="font-semibold">Definición:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Escala de 10 preguntas con respuestas tipo Likert (1 = totalmente en desacuerdo, 5 = totalmente de acuerdo).</li>
        <li>Las preguntas se alternan entre formulaciones positivas y negativas para evitar sesgo.</li>
        <li>El resultado es un puntaje único entre 0 y 100 (no es porcentaje).</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplos de ítems:</p>
      <ul class="list-disc list-inside pl-2">
        <li>“Me gustaría usar este sistema con frecuencia.”</li>
        <li>“Encontré el sistema innecesariamente complejo.”</li>
        <li>“Pensé que el sistema era fácil de usar.”</li>
        <li>“Necesitaría apoyo técnico para poder usar este sistema.”</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Fórmula de cálculo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Cada respuesta se normaliza en una escala 0–4 según si la pregunta es positiva o negativa.</li>
        <li>Se suman los valores y se multiplican por 2.5 → <strong>puntaje final 0–100</strong>.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretación:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>&gt; 80:</strong> excelente, sistema altamente usable.</li>
        <li><strong>70–80:</strong> bueno, con mejoras posibles.</li>
        <li><strong>50–70:</strong> aceptable, experiencia con fricciones.</li>
        <li><strong>&lt; 50:</strong> usabilidad deficiente, requiere rediseño.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">¿Qué mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La percepción subjetiva de usabilidad (no mide satisfacción ni estética).</li>
        <li>La comparabilidad con benchmarks de la industria, al ser una escala estándar.</li>
        <li>La evolución tras cambios en el producto (antes vs después de un rediseño).</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo en banca empresas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Un grupo de 20 usuarios evalúa la carga de nómina con el SUS.</li>
        <li>Puntaje promedio: 68 → aceptable pero con fricciones.</li>
        <li>Tras simplificar el flujo, el puntaje sube a 82 → evidencia de mejora en usabilidad.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No confundir SUS con satisfacción general (ese es CSAT o NPS).</li>
        <li>Evitar muestras muy pequeñas (&lt;10 usuarios) → resultados poco fiables.</li>
        <li>No usar SUS como único indicador; complementarlo con métricas de eficiencia (tiempo en tarea, tasa de éxito).</li>
      </ul>
    </div>
  </div>
  `
  },
  ces: {
  title: "CES (Customer Effort Score)",
  subtitle: "Satisfacción & Experiencia: mide el esfuerzo percibido para completar una tarea",
  html: `
  <div class="space-y-4">
    <p>
      El <strong>CES</strong> evalúa cuánto esfuerzo sintió un usuario al completar un flujo o tarea específica.
      En banca empresas es clave porque procesos como <em>pagos masivos</em>, <em>transferencias internacionales</em> 
      o <em>carga de nómina</em> pueden ser complejos, y este KPI permite medir qué tan costoso resulta para el cliente.
    </p>

    <div>
      <p class="font-semibold">Pregunta típica:</p>
      <ul class="list-disc list-inside pl-2">
        <li>“¿Qué tan fácil fue completar la tarea?”</li>
        <li>Escala de 1 a 5 (o 1 a 7), donde 1 = Muy fácil, 5/7 = Muy difícil.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Fórmula de cálculo:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>CES promedio = (Σ puntuaciones de esfuerzo ÷ Nº de respuestas)</code></li>
        <li>Opcional: reportar % de respuestas “Muy fácil” o “Fácil” como indicador de éxito.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">¿Qué mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>El nivel de fricción que percibe el usuario en el flujo.</li>
        <li>El impacto de la complejidad del diseño y requisitos del negocio en la experiencia.</li>
        <li>El costo cognitivo y operativo para completar tareas críticas.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretación:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>CES bajo (1–2):</strong> flujos fáciles de completar, experiencia óptima.</li>
        <li><strong>CES medio (3):</strong> esfuerzo aceptable pero con oportunidades de simplificación.</li>
        <li><strong>CES alto (4–5 o más):</strong> alto nivel de fricción; correlaciona con abandono y reclamos.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas prácticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Medir CES <strong>por flujo crítico</strong> (p. ej., nómina vs. transferencias) para accionar mejoras específicas.</li>
        <li>Complementar con métricas objetivas (<em>tiempo en tarea</em>, <em>errores de usuario</em>) para validar.</li>
        <li>Recoger feedback cualitativo opcional (“¿Qué te resultó más difícil?”) para diagnosticar.</li>
        <li>Comparar CES antes/después de cambios para probar impacto de simplificaciones.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Encuestas: 300. Promedio CES = 2.1 (escala 1–5).</li>
        <li>Usuarios destacan que cargar archivos de nómina requiere mucho ajuste → “difícil”.</li>
        <li>Tras mejorar la validación en vivo de planillas, CES baja a 1.4 → menor esfuerzo percibido.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No confundir “esfuerzo” con “satisfacción”: un flujo puede ser satisfactorio pero demandar esfuerzo.</li>
        <li>Evitar escalas diferentes en el tiempo (1–5 vs 1–7) sin recalibrar históricos.</li>
        <li>No usar CES en flujos demasiado triviales (p. ej., login), reservarlo para procesos con carga cognitiva real.</li>
      </ul>
    </div>
  </div>
  `
  },
  complaints: {
  title: "Reclamos / Incidencias",
  subtitle: "Satisfacción & Experiencia: volumen y resolución de problemas reportados por usuarios",
  html: `
  <div class="space-y-4">
    <p>
      El KPI <strong>Reclamos / Incidencias</strong> mide la cantidad y proporción de casos reportados por los
      usuarios en relación con el uso del producto. Refleja directamente la <em>percepción de calidad y confianza</em>
      del canal, y permite identificar áreas de fricción que generan costos adicionales en soporte y afectan la
      satisfacción.
    </p>

    <div>
      <p class="font-semibold">Definición:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Casos generados por usuarios a través de canales de atención (call center, tickets, chat, sucursal).</li>
        <li>Incluye tanto reclamos formales como incidencias técnicas reportadas por usuarios.</li>
        <li>Se relaciona con volumen de operaciones para medir su frecuencia relativa.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Fórmulas:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>Tasa de reclamos (%) = (Nº de reclamos/incidencias ÷ Nº total de operaciones) × 100</code></li>
        <li><code>Reclamos por 10.000 operaciones = (Nº de reclamos ÷ Nº de operaciones) × 10.000</code></li>
        <li><code>% resueltos en primer contacto = (Nº de reclamos resueltos al primer intento ÷ Nº total de reclamos) × 100</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">¿Qué mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La robustez y estabilidad de los flujos (menos errores → menos reclamos).</li>
        <li>El costo operativo derivado de incidencias (atención, soporte, reprocesos).</li>
        <li>La confianza del cliente: a menor tasa de reclamos, mayor percepción de fiabilidad.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretación:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>Tasa baja (&lt;0.5%):</strong> indica buena estabilidad y experiencia.</li>
        <li><strong>Tasa moderada (0.5–1.5%):</strong> aceptable, con puntos de fricción a monitorear.</li>
        <li><strong>Tasa alta (&gt;1.5%):</strong> señal de alerta: requiere análisis de causa raíz.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas prácticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Clasificar reclamos por <strong>categoría</strong>: técnica, operativa, UX, fraude.</li>
        <li>Analizar correlación con otros KPI’s (abandono, errores de usuario, latencia).</li>
        <li>Medir tiempo medio de resolución (TMR) y % resueltos en primer contacto.</li>
        <li>Priorizar incidencias de alto impacto económico o reputacional.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Mes: 200.000 operaciones digitales; 1.200 reclamos/incidencias registrados.</li>
        <li><code>Tasa de reclamos = (1.200 ÷ 200.000) × 100 = 0.6%</code>.</li>
        <li>60% resueltos en primer contacto, tiempo medio de resolución = 36 horas.</li>
        <li>El 40% de los reclamos corresponden a fallos en carga de nómina → foco de mejora inmediato.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No medir solo volumen: la gravedad e impacto económico/reputacional son igual o más importantes.</li>
        <li>No centralizar todas las categorías en un solo bucket: segmentar para poder accionar.</li>
        <li>No dejar sin integrar con métricas de autoservicio: un reclamo evitado digitalmente es ahorro directo.</li>
      </ul>
    </div>
  </div>
  `
  },
  conversion: {
  title: "Tasa de conversión",
  subtitle: "Conversión & Negocio: mide cuántos completan la acción clave esperada",
  html: `
  <div class="space-y-4">
    <p>
      La <strong>Tasa de conversión</strong> refleja el porcentaje de usuarios/empresas que, tras iniciar
      un flujo, llegan a completar la acción clave que define el éxito de ese proceso.
      En banca empresas este KPI es esencial para evaluar la efectividad de flujos como
      <em>apertura de productos</em>, <em>pagos masivos</em>, <em>transferencias internacionales</em>
      o <em>registro de servicios</em>.
    </p>

    <div>
      <p class="font-semibold">Definición:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Proporción de usuarios que alcanzan el objetivo final frente al total que inició el flujo.</li>
        <li>Debe estar asociado a una <em>acción de valor</em> clara (ej. pago confirmado, servicio activado, inversión fondeada).</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Fórmula:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>Tasa de conversión (%) = (Nº de usuarios/empresas que completaron la acción clave ÷ Nº total de usuarios/empresas que iniciaron el flujo) × 100</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">¿Qué mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La efectividad del diseño del flujo para guiar al usuario hasta el éxito.</li>
        <li>La claridad de la propuesta de valor y beneficios percibidos.</li>
        <li>La capacidad de convertir la intención en acción concluida.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretación:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>Alta conversión (&gt;80%):</strong> el flujo es claro, confiable y atractivo.</li>
        <li><strong>Conversión media (50–79%):</strong> aceptable, pero con puntos de fricción a revisar.</li>
        <li><strong>Baja conversión (&lt;50%):</strong> alerta: los usuarios se pierden o desisten antes de terminar.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas prácticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Definir con precisión cuál es el “evento de conversión” en cada flujo.</li>
        <li>Construir <strong>embudos de conversión</strong> para detectar en qué paso se caen los usuarios.</li>
        <li>Analizar por <strong>segmentos</strong>: tipo de empresa, rol de usuario, frecuencia de uso.</li>
        <li>Cruzar con métricas de <em>abandono</em> y <em>errores</em> para identificar fricciones.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Mes: 5.000 empresas inician flujo de registro de proveedores.</li>
        <li>3.700 completan y activan el servicio.</li>
        <li><code>Tasa de conversión = (3.700 ÷ 5.000) × 100 = 74%</code>.</li>
        <li>Tras simplificar validaciones, la tasa sube a 82% → clara mejora en efectividad.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No confundir “visitas” con “intenciones reales”: mide a quienes realmente inician el flujo.</li>
        <li>Evitar promediar conversiones de flujos muy diferentes (p. ej. pagos vs apertura de créditos).</li>
        <li>No ignorar la calidad: alta conversión con mucho fraude o errores no es éxito real.</li>
      </ul>
    </div>
  </div>
  `
  },
  value: {
  title: "Valor transaccionado",
  subtitle: "Conversión & Negocio: volumen monetario operado en el canal digital",
  html: `
  <div class="space-y-4">
    <p>
      El KPI <strong>Valor transaccionado</strong> mide el monto total de dinero movido a través de la banca empresas
      en un periodo determinado. Refleja el grado de confianza y relevancia que las empresas depositan en el canal
      digital para gestionar operaciones financieras de alto impacto.
    </p>

    <div>
      <p class="font-semibold">Definición:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Monto total de todas las operaciones completadas en el canal (pagos, transferencias, inversiones, retiros, etc.).</li>
        <li>Puede desglosarse por tipo de producto (ej. pagos masivos, transferencias internacionales, ahorro/inversión).</li>
        <li>Debe considerarse tanto el volumen bruto como el número de operaciones para tener contexto.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Fórmula:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>Valor transaccionado = Σ (monto de cada operación completada en el periodo)</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">¿Qué mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La magnitud económica que fluye por el canal digital.</li>
        <li>El nivel de confianza de las empresas en usar el canal para montos significativos.</li>
        <li>La migración de operaciones desde sucursales físicas a digital.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretación:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>Valor creciente:</strong> indica mayor adopción y confianza en el canal digital.</li>
        <li><strong>Valor estancado o decreciente:</strong> puede señalar que las empresas aún prefieren canales alternativos o que existe desconfianza para operaciones grandes.</li>
        <li>Debe analizarse junto a métricas de <em>número de operaciones</em> para distinguir entre más transacciones pequeñas o pocas transacciones grandes.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas prácticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Desglosar el valor por tipo de operación (p. ej. nómina, pagos a terceros, transferencias internacionales).</li>
        <li>Relacionar con KPIs de <em>autoservicio</em> para medir la migración desde sucursal.</li>
        <li>Monitorear top clientes y segmentos que generan la mayor parte del volumen.</li>
        <li>Combinar con <em>retención</em> para identificar sostenibilidad: empresas que mueven alto volumen tienden a permanecer.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Mes actual: 50.000 operaciones completadas.</li>
        <li>Monto total: USD 320 millones.</li>
        <li>De ellos, USD 200 millones corresponden a pagos masivos y USD 70 millones a transferencias internacionales.</li>
        <li>Comparado con el mes anterior (USD 280 millones), el valor creció un 14% → evidencia de mayor migración digital.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No interpretar valor alto como éxito absoluto: revisar también <em>costo operativo</em> y <em>tasa de éxito</em>.</li>
        <li>Evitar depender solo de grandes clientes: concentrar el valor en pocos actores aumenta riesgo.</li>
        <li>No confundir incremento de valor con incremento de usuarios; ambos deben medirse por separado.</li>
      </ul>
    </div>
  </div>
  `
  },
  cross: {
  title: "Cross-selling digital",
  subtitle: "Conversión & Negocio: ampliación de relación a través de productos adicionales",
  html: `
  <div class="space-y-4">
    <p>
      El KPI <strong>Cross-selling digital</strong> mide el porcentaje de clientes que, partiendo de un flujo
      principal en la banca empresas, contratan o activan un producto/servicio adicional de manera digital.
      Refleja la capacidad del canal para <em>profundizar la relación</em> con los clientes y aumentar el
      valor de vida (LTV).
    </p>

    <div>
      <p class="font-semibold">Definición:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Proporción de empresas que adquieren un producto adicional digitalmente tras usar o activar otro servicio.</li>
        <li>Ejemplos: al realizar pagos masivos, activar automáticamente un producto de inversión; 
        al consultar saldos, contratar línea de crédito.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Fórmula:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>Cross-selling digital (%) = (Nº de clientes que adquirieron un producto adicional ÷ Nº total de clientes expuestos a la oferta) × 100</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">¿Qué mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La efectividad de las estrategias digitales de ampliación de portafolio.</li>
        <li>La capacidad del canal para generar más valor por cliente (share of wallet).</li>
        <li>La confianza de los clientes para contratar productos complejos de forma digital.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretación:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>Alta tasa:</strong> los clientes perciben valor y facilidad para ampliar su relación digitalmente.</li>
        <li><strong>Tasa baja:</strong> puede indicar baja relevancia de la oferta, falta de confianza o fricción en el flujo.</li>
        <li>Debe analizarse junto a <em>retención</em> y <em>valor transaccionado</em> para ver impacto en sostenibilidad.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas prácticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Ofrecer productos complementarios en el momento correcto del flujo (ej. tras completar una transferencia, sugerir inversión de excedentes).</li>
        <li>Personalizar ofertas según perfil y comportamiento de la empresa.</li>
        <li>Medir tanto adopción inmediata como uso recurrente del producto adicional.</li>
        <li>Cuidar que el cross-selling no aumente la fricción del flujo original.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Mes: 2.000 empresas completaron pagos masivos.</li>
        <li>De ellas, 300 contrataron digitalmente un producto de inversión ofrecido en el flujo.</li>
        <li><code>Cross-selling digital = (300 ÷ 2.000) × 100 = 15%</code>.</li>
        <li>Tras mejorar la visibilidad de la oferta, la tasa sube a 22% en el siguiente trimestre.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No saturar al usuario con múltiples ofertas irrelevantes: genera rechazo y abandono.</li>
        <li>Evitar medir cross-selling solo por clics en la oferta; el KPI debe reflejar contratación/uso real.</li>
        <li>No confundir con retención: son indicadores distintos aunque complementarios.</li>
      </ul>
    </div>
  </div>
  `
  },
  retention: {
  title: "Retención (churn inverso)",
  subtitle: "Conversión & Negocio: mide cuántos clientes permanecen activos en el tiempo",
  html: `
  <div class="space-y-4">
    <p>
      El KPI <strong>Retención</strong>, también conocido como <em>churn inverso</em>, mide el porcentaje de
      clientes que siguen activos en la plataforma después de un periodo determinado. Es un indicador clave de
      la <em>sostenibilidad del negocio</em> y de la capacidad del canal digital para mantener relaciones a largo plazo.
    </p>

    <div>
      <p class="font-semibold">Definición:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Clientes considerados activos: aquellos que realizan al menos una acción relevante en un periodo definido (ej. transacción, aprobación, carga de nómina).</li>
        <li>Se mide típicamente en ventanas de 30, 60 o 90 días, y también a nivel trimestral o anual.</li>
        <li>Complemento natural del <em>churn</em>, que mide los que abandonan.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Fórmula:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>Retención (%) = (Nº de clientes activos al final del periodo ÷ Nº de clientes activos al inicio del periodo) × 100</code></li>
        <li><code>Churn (%) = 100 − Retención (%)</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">¿Qué mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La capacidad del canal digital para generar hábito y fidelidad.</li>
        <li>La salud de la relación con empresas: un cliente que se mantiene activo confía en el canal.</li>
        <li>El impacto de mejoras o problemas en la permanencia de clientes.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretación:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>Alta retención (&gt;85%):</strong> experiencia robusta y valor claro para los clientes.</li>
        <li><strong>Media (70–84%):</strong> aceptable, pero con señales de fuga en algunos segmentos.</li>
        <li><strong>Baja (&lt;70%):</strong> alerta: pérdida significativa de clientes → revisar fricciones o falta de valor.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas prácticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Definir con claridad qué significa “activo” en el contexto de banca empresas (ej. haber realizado al menos una operación en 90 días).</li>
        <li>Medir retención por <strong>segmento</strong> (micro, pyme, corporativo) y por <strong>rol</strong> (pagador, aprobador).</li>
        <li>Combinar con métricas de <em>valor transaccionado</em> y <em>uso por funcionalidad</em> para entender profundidad.</li>
        <li>Analizar cohortes: clientes que iniciaron en el mismo mes/trimestre para ver cómo evolucionan en el tiempo.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Al inicio de Q1: 5.000 empresas activas.</li>
        <li>Al final de Q1: 4.350 siguen activas.</li>
        <li><code>Retención = (4.350 ÷ 5.000) × 100 = 87%</code>.</li>
        <li>Churn = 13%. Tras mejorar onboarding de nómina, la retención sube a 90% en Q2.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No medir solo volumen: una empresa “activa” que mueve poco valor puede ser distinta a una de alto valor.</li>
        <li>No confundir retención con frecuencia: un cliente retenido puede entrar solo una vez en el trimestre.</li>
        <li>No dejar de lado cohortes: ver la evolución por antigüedad da información más accionable que un promedio global.</li>
      </ul>
    </div>
  </div>
  `
  },
  selfservice: {
  title: "% Autogestión exitosa",
  subtitle: "Autoservicio & Costos: casos resueltos sin intervención humana",
  html: `
  <div class="space-y-4">
    <p>
      El KPI <strong>% de autogestión exitosa</strong> mide la proporción de operaciones o solicitudes que los
      clientes logran resolver por sí mismos en los canales digitales, sin requerir ayuda de agentes humanos 
      (call center, sucursal, chat asistido). Refleja directamente la eficiencia del canal y su capacidad 
      para reducir costos operativos.
    </p>

    <div>
      <p class="font-semibold">Definición:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Operaciones completadas de principio a fin en digital sin asistencia manual.</li>
        <li>Incluye consultas, transacciones y gestiones administrativas (ej. cambio de contraseña, descarga de certificados).</li>
        <li>No se consideran autogestión exitosa los casos que terminan en un ticket o llamada.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Fórmula:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>% Autogestión exitosa = (Nº de operaciones completadas sin ayuda ÷ Nº total de operaciones iniciadas) × 100</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">¿Qué mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La madurez del canal digital como primera opción de uso.</li>
        <li>La reducción de dependencias en soporte humano.</li>
        <li>La confianza de los clientes en que el canal digital es suficiente para resolver sus necesidades.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretación:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>&gt;90%:</strong> excelente nivel de autoservicio, canal consolidado.</li>
        <li><strong>75–89%:</strong> aceptable, con oportunidades de mejora en ciertos flujos.</li>
        <li><strong>&lt;75%:</strong> alerta: demasiadas operaciones requieren intervención de soporte.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas prácticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Identificar los flujos con más derivaciones a soporte y simplificarlos.</li>
        <li>Ofrecer mensajes de error claros y soluciones inmediatas dentro del mismo canal.</li>
        <li>Medir autogestión a nivel de <em>funcionalidad</em> (ej. transferencias, nómina, certificados) para priorizar mejoras.</li>
        <li>Cruzar con métricas de <em>reclamos/incidencias</em> y <em>tiempo en tarea</em>.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Mes: 100.000 operaciones digitales.</li>
        <li>De ellas, 82.000 fueron completadas sin contacto con soporte.</li>
        <li><code>% Autogestión exitosa = (82.000 ÷ 100.000) × 100 = 82%</code>.</li>
        <li>Tras mejorar el flujo de recuperación de contraseña, el indicador sube a 89% en el siguiente trimestre.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No confundir autogestión con uso digital: si el cliente empieza en digital pero termina en call center, no cuenta como éxito.</li>
        <li>No ignorar la experiencia: autogestión “forzada” con alta fricción puede aumentar reclamos.</li>
        <li>No medir solo globalmente: un flujo puede tener 95% éxito y otro solo 50%, lo cual se oculta en el promedio.</li>
      </ul>
    </div>
  </div>
  `
  },
  digitalVsBranch: {
  title: "Digital vs. Sucursal",
  subtitle: "Autoservicio & Costos: proporción de operaciones digitales frente a presenciales",
  html: `
  <div class="space-y-4">
    <p>
      El KPI <strong>Digital vs. Sucursal</strong> mide la proporción de operaciones realizadas en el canal 
      digital en comparación con las realizadas en sucursales físicas. Refleja el grado de migración hacia 
      autoservicio y la eficiencia lograda al reducir costos operativos de atención presencial.
    </p>

    <div>
      <p class="font-semibold">Definición:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Operaciones realizadas por los clientes en banca empresas web o móvil vs. operaciones equivalentes realizadas en oficinas físicas.</li>
        <li>Se puede calcular a nivel global o por tipo de producto (ej. transferencias, pagos, consultas de saldo).</li>
        <li>Complementa al KPI de <em>% autogestión exitosa</em>, mostrando la sustitución de canales presenciales.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Fórmula:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>% Digital = (Operaciones digitales ÷ Operaciones totales) × 100</code></li>
        <li><code>% Sucursal = (Operaciones en sucursal ÷ Operaciones totales) × 100</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">¿Qué mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La efectividad de la estrategia de transformación digital.</li>
        <li>La preferencia real de los clientes por canales de autoservicio.</li>
        <li>El potencial de reducción de costos al disminuir la atención presencial.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretación:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>&gt;80% digital:</strong> excelente nivel de adopción digital.</li>
        <li><strong>50–79% digital:</strong> transición en progreso, todavía con alto uso de sucursales.</li>
        <li><strong>&lt;50% digital:</strong> alerta: los clientes siguen prefiriendo el canal presencial.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas prácticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Medir por tipo de transacción: algunos procesos pueden migrar más rápido que otros.</li>
        <li>Relacionar con costos operativos para cuantificar el ahorro de la migración digital.</li>
        <li>Complementar con encuestas cualitativas para entender barreras de adopción digital.</li>
        <li>Comparar contra benchmarks del sector bancario para evaluar madurez.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Mes actual: 500.000 operaciones totales.</li>
        <li>Digital: 420.000 (84%); Sucursal: 80.000 (16%).</li>
        <li><code>% Digital = (420.000 ÷ 500.000) × 100 = 84%</code>.</li>
        <li>En transferencias internacionales, el indicador es menor (65%), señal de oportunidad de migración.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No medir solo globalmente: los promedios pueden ocultar flujos con baja migración.</li>
        <li>No confundir “intención digital” (ej. iniciar en web) con operación completada digitalmente.</li>
        <li>No asumir que migrar a digital es siempre positivo: algunos segmentos valoran la atención presencial.</li>
      </ul>
    </div>
  </div>
  `
  },
  supportReduction: {
  title: "Reducción de llamadas a soporte",
  subtitle: "Autoservicio & Costos: impacto de mejoras digitales en la demanda de atención humana",
  html: `
  <div class="space-y-4">
    <p>
      El KPI <strong>Reducción de llamadas a soporte</strong> mide cómo evoluciona el volumen de llamadas al call center
      o tickets de soporte relacionados con procesos que pueden resolverse digitalmente. Refleja el impacto directo
      de las mejoras de autogestión en la <em>eficiencia operativa</em> y en los costos del banco.
    </p>

    <div>
      <p class="font-semibold">Definición:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Comparación del volumen de llamadas o tickets recibidos en un periodo contra un baseline histórico.</li>
        <li>Se enfoca en llamadas vinculadas a procesos que ya tienen opción digital (ej. desbloqueo de usuario, descarga de certificados, transferencias).</li>
        <li>Puede medirse globalmente o por tipo de flujo.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Fórmulas:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>% Reducción = ((Llamadas baseline − Llamadas actuales) ÷ Llamadas baseline) × 100</code></li>
        <li><code>Llamadas por 1.000 operaciones = (Nº de llamadas ÷ Nº de operaciones digitales) × 1.000</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">¿Qué mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>El impacto de las mejoras digitales en la resolución autónoma de los clientes.</li>
        <li>La reducción de costos operativos en atención telefónica y soporte humano.</li>
        <li>La efectividad de la comunicación y educación de usuarios para aprovechar el canal digital.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretación:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>Reducción significativa (&gt;30%):</strong> éxito claro de la estrategia digital.</li>
        <li><strong>Reducción moderada (10–29%):</strong> muestra avance, pero aún con dependencias de soporte.</li>
        <li><strong>Sin reducción o incremento:</strong> alerta: puede haber problemas de usabilidad o fallas técnicas recurrentes.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas prácticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Medir por <strong>categoría de llamada</strong> (ej. token, transferencias, contraseñas) para enfocar mejoras.</li>
        <li>Relacionar con KPIs de <em>% autogestión exitosa</em> y <em>errores de usuario</em>.</li>
        <li>Monitorear <strong>tiempo medio de atención</strong>: menos llamadas debe reflejar también menor carga operativa.</li>
        <li>Incluir retroalimentación de soporte para identificar causas raíz.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Baseline Q1: 15.000 llamadas de soporte relacionadas con bloqueos de usuario.</li>
        <li>Q2 tras mejoras de autogestión: 9.000 llamadas.</li>
        <li><code>% Reducción = ((15.000 − 9.000) ÷ 15.000) × 100 = 40%</code>.</li>
        <li>Impacto: ahorro operativo estimado de USD 50.000 en un trimestre.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No considerar solo volumen: medir también el <strong>motivo</strong> de las llamadas para entender qué procesos requieren rediseño.</li>
        <li>No confundir reducción por estacionalidad (ej. menos actividad en feriados) con mejora real.</li>
        <li>No medir aislado: vincularlo con satisfacción (CSAT, CES) para validar que la reducción no se debe a frustración o deserción del canal.</li>
      </ul>
    </div>
  </div>
  `
  },
  helpUsage: {
  title: "Uso de ayuda digital",
  subtitle: "Autoservicio & Costos: efectividad de FAQs, chatbots y guías en línea",
  html: `
  <div class="space-y-4">
    <p>
      El KPI <strong>Uso de ayuda digital</strong> mide cuántos clientes utilizan los recursos de soporte
      en línea (FAQs, chatbots, tutoriales, guías contextuales) y en qué medida resuelven sus dudas sin
      necesidad de contactar soporte humano. Refleja la <em>madurez del autoservicio</em> y el potencial
      de reducción de costos de atención.
    </p>

    <div>
      <p class="font-semibold">Definición:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Consultas atendidas en canales digitales de ayuda (FAQ, chatbot, asistentes contextuales).</li>
        <li>Éxito de esas consultas: porcentaje que resuelve sin escalar a soporte humano.</li>
        <li>Puede medirse a nivel global o por flujo (ej. transferencias, nómina, certificados).</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Fórmulas:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>% Uso de ayuda digital = (Consultas en canales digitales ÷ Total de consultas) × 100</code></li>
        <li><code>% Resolución digital = (Consultas resueltas sin escalar ÷ Consultas en ayuda digital) × 100</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">¿Qué mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>El grado en que los clientes adoptan recursos de autoservicio para resolver dudas.</li>
        <li>La efectividad de las herramientas digitales frente a la atención tradicional.</li>
        <li>El impacto de FAQs, tutoriales y chatbots en la reducción de carga de soporte.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretación:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>Uso alto (&gt;60% de consultas en digital):</strong> buena adopción de ayuda online.</li>
        <li><strong>Resolución alta (&gt;80%):</strong> indica que las herramientas son efectivas.</li>
        <li><strong>Bajo uso:</strong> los clientes no encuentran la ayuda o no confían en ella.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas prácticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Integrar ayuda contextual en el flujo (tooltips, guías paso a paso).</li>
        <li>Monitorear las preguntas más frecuentes en chat/FAQ y actualizar contenido.</li>
        <li>Medir tasa de escalamiento: qué % de consultas terminan en agente humano.</li>
        <li>Usar feedback (“¿Te fue útil esta respuesta?”) para mejorar continuamente.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Mes: 50.000 consultas totales.</li>
        <li>De ellas, 30.000 fueron atendidas por FAQ/chatbot.</li>
        <li><code>% Uso de ayuda digital = (30.000 ÷ 50.000) × 100 = 60%</code>.</li>
        <li>24.000 de esas consultas se resolvieron sin escalar → <code>% Resolución digital = (24.000 ÷ 30.000) × 100 = 80%</code>.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No medir solo volumen: el éxito depende de la resolución efectiva.</li>
        <li>Evitar chatbots que devuelvan respuestas genéricas sin contexto; generan frustración.</li>
        <li>No dejar FAQs estáticas: la falta de actualización reduce confianza y uso.</li>
      </ul>
    </div>
  </div>
  `
  },
  failedLogin: {
  title: "Intentos de login fallidos",
  subtitle: "Seguridad & Cumplimiento: fricción y riesgo en el acceso",
  html: `
  <div class="space-y-4">
    <p>
      El KPI <strong>Intentos de login fallidos</strong> mide la cantidad y proporción de accesos no exitosos
      (credenciales incorrectas, bloqueo por intentos, expiración de sesión/2FA). En banca empresas, un nivel alto
      puede indicar <em>fricción de UX</em> (reglas poco claras) o <em>riesgo</em> (ataques de fuerza bruta).
    </p>

    <div>
      <p class="font-semibold">Definición:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Conteo de intentos de autenticación con error (usuario/clave, 2FA, dispositivo no reconocido).</li>
        <li>Puede incluir <em>bloqueos de cuenta</em> tras N intentos fallidos.</li>
        <li>Se recomienda medir por <strong>empresa</strong>, <strong>usuario</strong> y <strong>origen</strong> (IP/dispositivo).</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Fórmulas:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>Intentos fallidos por 1.000 sesiones = (Nº de intentos fallidos ÷ Nº de sesiones totales) × 1.000</code></li>
        <li><code>% sesiones con al menos 1 fallo = (Sesiones con ≥1 fallo ÷ Sesiones totales) × 100</code></li>
        <li><code>% cuentas bloqueadas = (Cuentas bloqueadas por intentos ÷ Cuentas activas) × 100</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">¿Qué mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La claridad y usabilidad del proceso de autenticación (UX del login/2FA).</li>
        <li>Eventos anómalos que pueden sugerir ataques o credenciales comprometidas.</li>
        <li>Impacto de políticas (complejidad de contraseñas, rotación, 2FA) en la fricción del acceso.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretación (guía):</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>&lt; 30/1.000 sesiones:</strong> fricción baja esperable en entornos 2FA.</li>
        <li><strong>30–80/1.000:</strong> revisar UX/mensajes, latencia del OTP y recordatorios de políticas.</li>
        <li><strong>&gt; 80/1.000 o picos súbitos:</strong> posible ataque o cambio de política mal comunicado.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas prácticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Separar <strong>error de credenciales</strong>, <strong>error de 2FA</strong> y <strong>bloqueo</strong> como eventos distintos.</li>
        <li>Registrar <strong>latencia del OTP</strong> y ventana de validez para detectar caducidades.</li>
        <li>Mejorar mensajes accionables (formato de usuario, política de contraseña, reenvío de OTP).</li>
        <li>Aplicar <strong>rate limiting</strong>, CAPTCHA adaptativo y alertas ante picos por IP/rango.</li>
        <li>Segmentar por <strong>rol</strong> (pagador, aprobador) y por <strong>dispositivo</strong> (web/móvil).</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Mes: 120.000 sesiones; 7.200 intentos fallidos.</li>
        <li><code>Intentos fallidos por 1.000 = (7.200 ÷ 120.000) × 1.000 = 60</code>.</li>
        <li>El 35% proviene de <em>2FA expirado</em> → se amplía ventana de OTP y se añade reenvío rápido; el indicador baja a 28/1.000.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No mezclar intentos fallidos con <strong>intentos maliciosos</strong> sin aplicar heurísticas (IP, patrón temporal).</li>
        <li>No usar solo totales: los <strong>picos horarios</strong> y por <strong>origen</strong> son clave para detección temprana.</li>
        <li>Evitar mensajes genéricos (“error de autenticación”): impiden que el usuario se recupere y elevan llamadas a soporte.</li>
      </ul>
    </div>
  </div>
  `
  },
  twoFA: {
  title: "2FA éxito",
  subtitle: "Seguridad & Cumplimiento: efectividad de la autenticación de dos factores",
  html: `
  <div class="space-y-4">
    <p>
      El KPI <strong>2FA éxito</strong> mide el porcentaje de intentos de autenticación con doble factor
      (contraseña + token/OTP, app de seguridad, biometría) que resultan exitosos. Refleja tanto la
      <em>robustez de la seguridad</em> como la <em>usabilidad del proceso</em>.
    </p>

    <div>
      <p class="font-semibold">Definición:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Intentos de autenticación que logran completarse correctamente usando el segundo factor requerido.</li>
        <li>Puede incluir OTP por SMS, token físico, app de autenticación o biometría.</li>
        <li>Debe diferenciarse entre <strong>fallas técnicas</strong> (OTP no entregado, latencia) y <strong>fallas de usuario</strong> (código expirado, digitación errónea).</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Fórmulas:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>% 2FA éxito = (Nº de autenticaciones 2FA completadas ÷ Nº total de intentos 2FA) × 100</code></li>
        <li><code>% 2FA fallidas = 100 − % 2FA éxito</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">¿Qué mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La confiabilidad del sistema de autenticación multifactor.</li>
        <li>La claridad de la experiencia de usuario en procesos sensibles.</li>
        <li>El impacto de la fricción en la continuidad de operaciones críticas (pagos, transferencias).</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretación (referencial):</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>&gt; 95%:</strong> óptimo, balance adecuado entre seguridad y usabilidad.</li>
        <li><strong>90–94%:</strong> aceptable, pero con señales de fricción o fallas técnicas.</li>
        <li><strong>&lt; 90%:</strong> alerta: exceso de fricción o problemas de infraestructura/entrega de OTP.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas prácticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Separar métricas de <strong>fallos de entrega</strong> (ej. SMS no llega) vs <strong>fallos de uso</strong> (código digitado mal).</li>
        <li>Medir latencia promedio de entrega de OTP.</li>
        <li>Optimizar mensajes y UX para evitar expiraciones de códigos.</li>
        <li>Ofrecer opciones de segundo factor redundantes (app, token físico, SMS).</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Mes: 80.000 intentos de autenticación 2FA.</li>
        <li>De ellos, 75.200 fueron exitosos.</li>
        <li><code>% 2FA éxito = (75.200 ÷ 80.000) × 100 = 94%</code>.</li>
        <li>Tras mejorar el tiempo de entrega de OTP, el KPI sube a 97% en el siguiente trimestre.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No confundir bajo % con falta de seguridad: a veces indica demasiada fricción.</li>
        <li>No mezclar intentos <strong>reales</strong> con intentos <strong>maliciosos</strong> (fuerza bruta, bots).</li>
        <li>Evitar medir solo globalmente: segmentar por canal (web, app) y tipo de token.</li>
      </ul>
    </div>
  </div>
  `
  },
  kyc: {
  title: "Tiempo KYC",
  subtitle: "Seguridad & Cumplimiento: rapidez para habilitar a una empresa a operar",
  html: `
  <div class="space-y-4">
    <p>
      <strong>Tiempo KYC</strong> (Know Your Customer) mide cuánto tarda el proceso de verificación y
      habilitación de una empresa (y sus usuarios/firmantes) desde el inicio del alta hasta quedar
      <em>apta para operar</em> en la banca empresas. Impacta directamente en la activación y en la
      percepción de agilidad/regulación.
    </p>

    <div>
      <p class="font-semibold">Definición:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Tiempo <em>end-to-end</em> desde la solicitud/registro hasta la aprobación final para operar.</li>
        <li>Incluye validación de empresa, UBO/beneficiarios finales, listas de sanciones, documentación y asignación de roles.</li>
        <li>Se recomienda medir por <strong>p50/p90</strong> y % dentro de SLA comprometido.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Fórmulas:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>Tiempo KYC promedio = Σ (tiempo de cada caso) ÷ Nº de casos</code></li>
        <li><code>P90 KYC = tiempo por debajo del cual finalizan el 90% de los casos</code></li>
        <li><code>% dentro de SLA = (Casos con KYC ≤ SLA ÷ Casos totales) × 100</code></li>
        <li><code>% STP (Straight-Through Processing) = (Casos aprobados sin intervención manual ÷ Casos totales) × 100</code></li>
        <li><code>% Re-trabajo = (Casos que requirieron reenvío de docs ÷ Casos totales) × 100</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">¿Qué mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La eficiencia del onboarding regulatorio y la calidad de la documentación solicitada.</li>
        <li>La fricción operativa (idas y vueltas por documentos, validaciones fallidas, observaciones).</li>
        <li>El balance entre cumplimiento normativo y agilidad para habilitar el canal.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretación (guía):</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>P90 ≤ 3–5 días hábiles:</strong> onboarding ágil para pymes/renovaciones.</li>
        <li><strong>P90 6–10 días:</strong> razonable en corporativos con estructuras complejas.</li>
        <li><strong>P90 &gt; 10 días o % SLA &lt; 80%:</strong> alerta: exceso de fricción o cuello de botella operativo.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas prácticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Checklists dinámicos y <em>upload</em> guiado con validaciones en tiempo real (formato, vigencia, legibilidad).</li>
        <li>Integraciones para <strong>verificación automática</strong> (registros mercantiles, listas PEP/sanciones) y cálculo de riesgo.</li>
        <li>Separar tiempos por etapa: recepción de docs → verificación → observaciones → aprobación final.</li>
        <li>Medir y elevar <strong>% STP</strong>; reducir <strong>% re-trabajo</strong> con requisitos claros y ejemplos.</li>
        <li>Segmentar por tipo de empresa (micro/pyme/corporativa) y por <em>renovación</em> vs <em>alta</em>.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Mes: 1.000 casos KYC iniciados; SLA = 5 días hábiles.</li>
        <li>Promedio = 4.2 días; P90 = 7.1 días; <code>% dentro de SLA = 78%</code>.</li>
        <li>% STP = 46%; % Re-trabajo = 22% (principalmente por actas societarias desactualizadas).</li>
        <li>Tras guías de documentación y validación automática, P90 baja a 5.2 días y SLA sube a 88%.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No medir solo promedio: los percentiles muestran la verdadera cola larga de casos lentos.</li>
        <li>Evitar requisitos redundantes o no normativos que alargan el ciclo sin mejorar el control.</li>
        <li>No mezclar renovaciones simplificadas con altas nuevas complejas al reportar.</li>
      </ul>
    </div>
  </div>
  `
  },
  fraud: {
  title: "Fraude detectado / prevenido",
  subtitle: "Seguridad & Cumplimiento: protección activa contra operaciones sospechosas",
  html: `
  <div class="space-y-4">
    <p>
      El KPI <strong>Fraude detectado / prevenido</strong> mide la cantidad y el valor monetario de intentos de fraude
      que fueron identificados y bloqueados antes de concretarse. En banca empresas, es crítico porque garantiza la
      <em>confianza en el canal digital</em> y refleja la efectividad de los sistemas antifraude y de monitoreo.
    </p>

    <div>
      <p class="font-semibold">Definición:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Intentos de operaciones sospechosas que fueron detenidas, investigadas o rechazadas por reglas antifraude o monitoreo manual.</li>
        <li>Incluye fraude por phishing, credenciales robadas, malware, suplantación o desvío de fondos.</li>
        <li>Se mide tanto en <strong>número de casos</strong> como en <strong>monto económico</strong> bloqueado.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Fórmulas:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>Nº de fraudes detectados = total de operaciones sospechosas bloqueadas</code></li>
        <li><code>Monto prevenido = Σ montos de operaciones bloqueadas por sospecha de fraude</code></li>
        <li><code>% de fraude prevenido = (Monto bloqueado ÷ Monto total intentado en fraudes) × 100</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">¿Qué mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La capacidad de las defensas digitales (reglas, IA, monitoreo) para proteger el dinero del cliente y del banco.</li>
        <li>La evolución de intentos de fraude a lo largo del tiempo (tendencias y patrones).</li>
        <li>El nivel de resiliencia del canal frente a amenazas emergentes.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretación:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>Más fraudes detectados</strong> puede ser positivo (sistema alerta funcionando) o negativo (incremento de ataques); debe leerse junto al % prevenido.</li>
        <li><strong>% prevenido alto (&gt;95%)</strong> indica un sistema robusto.</li>
        <li><strong>% prevenido bajo (&lt;90%)</strong> alerta de vulnerabilidades o controles insuficientes.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas prácticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Separar métricas de <strong>fraude detectado</strong> (bloqueado) vs <strong>fraude consumado</strong> (logró concretarse).</li>
        <li>Analizar por canal (web, móvil) y tipo de fraude (phishing, malware, ingeniería social).</li>
        <li>Correlacionar con <em>intentos de login fallidos</em> y <em>2FA éxito</em> para anticipar vulnerabilidades.</li>
        <li>Medir tiempos de reacción desde la alerta hasta la resolución.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Mes: 250 intentos de fraude detectados.</li>
        <li>Monto intentado: USD 3.2 millones.</li>
        <li>Monto bloqueado: USD 3.05 millones.</li>
        <li><code>% prevenido = (3.05M ÷ 3.2M) × 100 = 95.3%</code>.</li>
        <li>El 60% correspondió a intentos con credenciales robadas; tras reforzar 2FA, el índice de éxito de ataques bajó significativamente.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No confundir volumen de intentos con vulnerabilidad: un alza puede deberse a campañas externas.</li>
        <li>No reportar solo número de casos: el monto económico es igual de relevante.</li>
        <li>No mezclar fraude detectado con reclamos de usuarios; deben integrarse pero medirse distinto.</li>
      </ul>
    </div>
  </div>
  `
  },
  onboarding: {
  title: "Tiempo de activación de empresa/usuario",
  subtitle: "Seguridad & Cumplimiento: rapidez para habilitar a un cliente a operar en digital",
  html: `
  <div class="space-y-4">
    <p>
      El KPI <strong>Tiempo de activación de empresa/usuario</strong> mide cuánto tarda una empresa o un usuario 
      en quedar habilitado para operar en la banca empresas digital después de haberse registrado o haber sido creado 
      en el sistema. Refleja la <em>eficiencia del onboarding</em> y el impacto del proceso inicial en la experiencia del cliente.
    </p>

    <div>
      <p class="font-semibold">Definición:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Tiempo desde el registro o alta de un cliente/usuario hasta su primera operación exitosa en el canal digital.</li>
        <li>Incluye pasos como validación de identidad, configuración de perfiles, activación de token o credenciales y asignación de permisos.</li>
        <li>Se recomienda medir en días u horas hábiles, y distinguir entre <em>empresas nuevas</em> y <em>usuarios adicionales</em> dentro de una empresa existente.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Fórmulas:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>Tiempo promedio de activación = Σ (tiempo de activación por cliente/usuario) ÷ Nº de clientes/usuarios activados</code></li>
        <li><code>% activados dentro de SLA = (Clientes/usuarios activados dentro del tiempo objetivo ÷ Total activados) × 100</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">¿Qué mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La agilidad del banco en habilitar a sus clientes para operar digitalmente.</li>
        <li>La claridad del proceso de onboarding y la facilidad de configuración inicial.</li>
        <li>El impacto de fricciones como demoras en la entrega de tokens, validaciones manuales o aprobación de roles.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretación:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>≤ 24–48h:</strong> experiencia ágil, genera confianza y rápida adopción.</li>
        <li><strong>3–5 días:</strong> aceptable, pero puede generar frustración en clientes que esperan inmediatez.</li>
        <li><strong>&gt; 5 días:</strong> alerta: riesgo de abandono o migración a canales presenciales.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas prácticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Automatizar validaciones y asignación de permisos para reducir tiempos.</li>
        <li>Medir activación por rol (ej. pagador, aprobador, visor) para identificar cuellos de botella específicos.</li>
        <li>Ofrecer guías claras y soporte contextual para reducir la necesidad de llamadas o tickets.</li>
        <li>Comparar tiempos de activación de empresas nuevas vs usuarios adicionales dentro de clientes existentes.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Mes: 1.200 usuarios/empresas registrados.</li>
        <li>Promedio de activación: 2.8 días.</li>
        <li><code>% dentro de SLA (≤ 3 días) = (950 ÷ 1.200) × 100 = 79%</code>.</li>
        <li>Tras automatizar entrega de tokens, el promedio bajó a 1.5 días y SLA subió a 92%.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No medir solo promedio: usar percentiles (P90, P95) para capturar casos lentos que generan frustración.</li>
        <li>No confundir activación con adopción: que un usuario esté habilitado no garantiza que lo use (ese es KPI de activación funcional).</li>
        <li>No excluir usuarios adicionales: su experiencia también impacta la satisfacción global de la empresa.</li>
      </ul>
    </div>
  </div>
  `
  },
  uptime: {
  title: "Disponibilidad (uptime)",
  subtitle: "Salud técnica: estabilidad y continuidad del servicio digital",
  html: `
  <div class="space-y-4">
    <p>
      El KPI <strong>Disponibilidad (uptime)</strong> mide el porcentaje de tiempo en que la banca empresas
      está operativa y accesible para los clientes. Es un indicador crítico de la <em>confiabilidad técnica</em>
      y está directamente vinculado a la percepción de seguridad y confianza en el canal digital.
    </p>

    <div>
      <p class="font-semibold">Definición:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Tiempo total en que el servicio estuvo disponible ÷ tiempo total del periodo medido.</li>
        <li>Se mide típicamente a nivel mensual o trimestral.</li>
        <li>Incluye tanto caídas totales como parciales (ej. un módulo clave fuera de servicio).</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Fórmula:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>Uptime (%) = ((Tiempo total del periodo − Tiempo de caída) ÷ Tiempo total del periodo) × 100</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">¿Qué mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La confiabilidad de la infraestructura técnica de la banca empresas.</li>
        <li>El impacto de caídas programadas (mantenimientos) y no programadas en la experiencia del cliente.</li>
        <li>La solidez de los mecanismos de redundancia y monitoreo.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretación (estándares):</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>99.9% o más:</strong> nivel óptimo (“tres nueves” = ~43 min de caída/mes).</li>
        <li><strong>99.5–99.8%:</strong> aceptable, pero con espacio para mejora (~3.5h de caída/mes).</li>
        <li><strong>&lt;99.5%:</strong> crítico: genera desconfianza y puede incumplir SLAs regulatorios.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas prácticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Diferenciar caídas planificadas vs incidentes críticos.</li>
        <li>Medir disponibilidad por módulo crítico (pagos, transferencias, consultas).</li>
        <li>Complementar con <em>MTTR</em> (Mean Time to Recovery) para ver velocidad de recuperación.</li>
        <li>Implementar monitoreo continuo y alertas proactivas para minimizar impacto en clientes.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Periodo: 30 días = 43.200 minutos.</li>
        <li>Caídas no planificadas: 85 minutos.</li>
        <li><code>Uptime = ((43.200 − 85) ÷ 43.200) × 100 = 99.80%</code>.</li>
        <li>Interpretación: dentro de lo aceptable, aunque por debajo de un SLA de 99.9%.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No reportar solo uptime global: las caídas parciales de módulos clave afectan más al cliente que una caída breve total.</li>
        <li>Evitar ocultar mantenimientos bajo “disponibilidad plena”: deben comunicarse claramente.</li>
        <li>No medir solo al final de mes: el impacto real está en las horas pico de operación (ej. nómina, fin de mes).</li>
      </ul>
    </div>
  </div>
  `
  },
  errors5xx: {
  title: "Errores 4xx / 5xx",
  subtitle: "Salud técnica: estabilidad y confiabilidad de los servicios",
  html: `
  <div class="space-y-4">
    <p>
      El KPI <strong>Errores 4xx / 5xx</strong> mide la frecuencia de respuestas fallidas devueltas por
      los servicios del canal digital. Es un indicador directo de la <em>calidad técnica</em> y refleja
      tanto problemas de <em>validación / cliente</em> (4xx) como de <em>infraestructura / servidor</em> (5xx).
    </p>

    <div>
      <p class="font-semibold">Definiciones:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>Errores 4xx:</strong> solicitudes inválidas por parte del cliente (campos mal formados, permisos insuficientes, recursos inexistentes).</li>
        <li><strong>Errores 5xx:</strong> fallas del servidor (timeouts, caídas de servicios, excepciones internas).</li>
        <li>Ambos afectan la experiencia del usuario y deben monitorearse de forma diferenciada.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Fórmulas:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>Tasa de errores 4xx/5xx = (Nº de respuestas 4xx/5xx ÷ Nº total de requests) × 100</code></li>
        <li><code>Errores por 10.000 requests = (Nº de errores ÷ Nº total de requests) × 10.000</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">¿Qué mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La estabilidad técnica del backend y la calidad de las integraciones.</li>
        <li>La claridad y robustez de las validaciones de entrada.</li>
        <li>La experiencia real de los clientes al intentar operar en el canal digital.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretación:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>&lt; 0.5% de errores:</strong> nivel óptimo de estabilidad.</li>
        <li><strong>0.5% – 1.5%:</strong> aceptable, con oportunidades de optimización.</li>
        <li><strong>&gt; 1.5%:</strong> alerta de inestabilidad que afecta directamente a la satisfacción y confianza.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas prácticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Separar métricas de 4xx vs 5xx para diferenciar <em>errores de usuario</em> vs <em>fallos técnicos</em>.</li>
        <li>Monitorear percentiles y picos horarios para detectar saturaciones.</li>
        <li>Cruzar con KPIs de <em>tasa de éxito</em> y <em>abandono</em> para entender impacto en negocio.</li>
        <li>Implementar alertas automáticas cuando supere umbrales definidos (ej. SLA interno).</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Mes: 12 millones de requests.</li>
        <li>Errores 4xx: 48.000 (0.4%); Errores 5xx: 36.000 (0.3%).</li>
        <li><code>Tasa total de errores = (84.000 ÷ 12.000.000) × 100 = 0.7%</code>.</li>
        <li>Tras reforzar validaciones en API de transferencias, los 4xx bajan a 0.2% y la tasa global a 0.5%.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No agrupar 4xx y 5xx como un único indicador sin desglose: tienen causas y acciones distintas.</li>
        <li>No medir solo promedios: los picos en horarios críticos pueden ser más dañinos que el global mensual.</li>
        <li>Evitar depender de reportes manuales; instrumentar monitoreo continuo y alertas proactivas.</li>
      </ul>
    </div>
  </div>
  `
  },
  mttr: {
  title: "MTTR (Mean Time To Recovery)",
  subtitle: "Salud técnica: rapidez de recuperación tras incidentes",
  html: `
  <div class="space-y-4">
    <p>
      El KPI <strong>MTTR (Mean Time To Recovery)</strong> mide el tiempo promedio que tarda el equipo en 
      restaurar el servicio tras un incidente que afecta la disponibilidad o el desempeño de la banca empresas. 
      Es clave para evaluar la <em>resiliencia operativa</em> y la capacidad de respuesta ante fallos.
    </p>

    <div>
      <p class="font-semibold">Definición:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Tiempo desde la detección del incidente hasta la recuperación total del servicio afectado.</li>
        <li>Incluye incidentes críticos (caídas de módulos de pagos, transferencias, login) y menores (degradaciones).</li>
        <li>Debe medirse por severidad e incluir tanto interrupciones totales como parciales.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Fórmula:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>MTTR = Σ (Tiempo de recuperación de cada incidente) ÷ Nº de incidentes</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">¿Qué mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La efectividad de los equipos técnicos en resolver problemas.</li>
        <li>El impacto de los incidentes en la continuidad de negocio.</li>
        <li>La madurez de los procesos de monitoreo, diagnóstico y respuesta.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretación (referencial):</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>&lt; 1 hora:</strong> excelente, alta resiliencia.</li>
        <li><strong>1–4 horas:</strong> aceptable, con oportunidad de mejora.</li>
        <li><strong>&gt; 4 horas:</strong> crítico: riesgo alto de impacto en clientes y reputación.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas prácticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Clasificar incidentes por severidad (crítico, mayor, menor) y calcular MTTR por nivel.</li>
        <li>Automatizar monitoreo y alertas para reducir el <em>tiempo de detección</em> (MTTD).</li>
        <li>Establecer <strong>runbooks</strong> y protocolos claros para acelerar la recuperación.</li>
        <li>Realizar post-mortems y aplicar aprendizajes para evitar reincidencias.</li>
        <li>Complementar con <em>uptime</em> y <em>errores 4xx/5xx</em> para una visión integral.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Mes: 8 incidentes registrados.</li>
        <li>Tiempos de recuperación: 30m, 50m, 1h20m, 2h10m, 40m, 3h, 1h, 45m.</li>
        <li>Promedio = 1h30m → <code>MTTR = 90 minutos</code>.</li>
        <li>Tras implementar monitoreo proactivo, el promedio baja a 55 minutos el siguiente trimestre.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No medir solo el promedio: analizar también la variabilidad (P90) para casos extremos.</li>
        <li>No incluir en MTTR tareas post-incidente como análisis forense; debe centrarse en <em>restauración de servicio</em>.</li>
        <li>No confundir con <em>MTTF</em> (Mean Time To Failure) o <em>MTBF</em> (Mean Time Between Failures).</li>
      </ul>
    </div>
  </div>
  `
  },
};

export default KPI_DETAILS;
