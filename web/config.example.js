const CONFIG = {
  SUPABASE_URL:      'https://TU_PROYECTO.supabase.co',
  SUPABASE_ANON_KEY: 'TU_ANON_KEY',
  INFLUXDB_URL:      'https://us-east-1-1.aws.cloud2.influxdata.com',
  INFLUXDB_ORG:      'TU_ORG_O_ID',
  INFLUXDB_BUCKET:   'biblioteca',
  INFLUXDB_TOKEN:    'TU_TOKEN_SOLO_LECTURA',
  GRAFANA_BASE_URL:  'https://TU_ORG.grafana.net',
  GRAFANA_PANELS: {
    temperature: '',
    humidity:    '',
    tvoc:        '',
  },
  SENSORS: [],
  THRESHOLDS: { },
  REFRESH_INTERVAL_MS: 120000,
};