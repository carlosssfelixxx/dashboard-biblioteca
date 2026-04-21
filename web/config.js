/**
 * config.js — Biblioteca Dashboard
 * Edita estos valores con los tuyos antes de desplegar.
 */

const CONFIG = {

  // ─── Supabase ─────────────────────────────────────────────────────────────
  // Obtén estos valores en: https://app.supabase.com → Project Settings → API
  SUPABASE_URL:     'https://bfzblidwbrfmspfxrveg.supabase.co',
  SUPABASE_ANON_KEY:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmemJsaWR3YnJmbXNwZnhydmVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU0MjkzOTksImV4cCI6MjA5MTAwNTM5OX0.8livDszT0UOCFn9IohrkvLUx2gDnVbYQlaG783-cqzk',

  // ─── InfluxDB Cloud ───────────────────────────────────────────────────────
  // Genera un token de SOLO LECTURA en InfluxDB Cloud → Load Data → API Tokens
  INFLUXDB_URL:    'https://us-east-1-1.aws.cloud2.influxdata.com',
  INFLUXDB_ORG:    'Dev Team',
  INFLUXDB_BUCKET: 'biblioteca',
  INFLUXDB_TOKEN:  'nQ0j47iX1vEAkiVxnxoKiW9ZdvFPCJWcZqLafzzAH-LUriuaHr_Plj8QVWVaHJwf4wlblxcRAJaW7ZOycnF_uw==',   // Solo lectura, seguro exponer al browser

  // ─── Grafana Cloud ────────────────────────────────────────────────────────
  // En Grafana: Share panel → Embed → habilita "Current time range" y copia la URL base
  GRAFANA_BASE_URL: 'https://carlosssfelixxx.grafana.net/',
  // IDs de cada panel (Share → Link → Panel ID en la URL)
  GRAFANA_PANELS: {
    temperature: 'd-solo/ca847wd/monitoreo-biblioteca?orgId=1&timezone=browser&panelId=panel-1',
    humidity:    'd-solo/ca847wd/monitoreo-biblioteca?orgId=1&timezone=browser&panelId=panel-2',
    tvoc:        'd-solo/ca847wd/monitoreo-biblioteca?orgId=1&timezone=browser&panelId=panel-4',
  },

  // ─── Sensores ─────────────────────────────────────────────────────────────
  // Agregar o quitar sensores según tu instalación.
  // x e y son porcentajes sobre la imagen del plano (0-100)
  SENSORS: [
    { id: 'eui-0123456789abcdef',  name: 'Gateway',      x: 91.5,  y: 63.5 },
    { id: 'eui-abcdef0123456789',  name: 'Ambiental',    x: 53.1,  y: 75 },
    { id: 'eui-1234abcd5678ef01',  name: 'Puerta',       x: 56.5,  y: 55 },
  ],

  // ─── Umbrales de alerta (para indicadores visuales en el dashboard) ────────
  THRESHOLDS: {
    co2:         { max: 1000,  unit: 'ppm' },
    pm25:        { max: 12,    unit: 'µg/m³' },
    tvoc:        { max: 300,   unit: 'µg/m³' },
    noise:       { max: 45,    unit: 'dB' },
    temperature: { min: 19, max: 25, unit: '°C' },
    humidity:    { min: 35, max: 65, unit: '%' },
    illuminance: { min: 300,   unit: 'lux' },
    battery:     { min: 20,    unit: '%' },
  },

  // ─── Intervalo de refresco de datos en ms (default: 2 minutos) ────────────
  REFRESH_INTERVAL_MS: 120000,
};