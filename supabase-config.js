// supabase-config.js
// A biblioteca do Supabase será importada no HTML. Aqui nós apenas a inicializamos.
const supabaseUrl = 'https://fyxdcyiflrllxkpirlso.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5eGRjeWlmbHJsbHhrcGlybHNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEzMjQ3ODYsImV4cCI6MjEwNjkwMDc4Nn0.RLK0N-zrVjdIv-wtS1SyojJ7gXCydbzoD174kOyWfuk';
const clienteSupabase = window.supabase.createClient(supabaseUrl, supabaseKey);
