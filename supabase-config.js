// supabase-config.js
// A biblioteca do Supabase será importada no HTML. Aqui nós apenas a inicializamos.
const supabaseUrl = 'https://fyxdcyiflrllxkpirlso.supabase.co';
const supabaseKey = 'sb_publishable_qmFcWhnyAlcQLVhJR4pi7w_L8wjX1tq';
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);
