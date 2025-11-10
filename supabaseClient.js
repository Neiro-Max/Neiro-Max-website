// supabaseClient.js
const SUPABASE_URL = " https://mmiwwpdcduysyhfjugzq.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1taXd3cGRjZHV5c3loZmp1Z3pxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3ODYxODEsImV4cCI6MjA3ODM2MjE4MX0.whhzfSTCDTgL3prEhtNB_LTd_1UqS9Kgebk7U4Q_kT8";

const script = document.createElement('script');
script.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/supabase.min.js";
script.onload = () => {
  // создаём клиент Supabase и кладём его в window для простоты
  window.supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  console.log('Supabase ready');
};
document.head.appendChild(script);
