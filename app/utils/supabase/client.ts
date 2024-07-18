import { createBrowserClient  } from "@supabase/ssr";

const supabaseUrl = process.env.SUPABASE_URL!;

const supabaseKey = process.env.SUPABASE_KEY!;

const supabase = createBrowserClient (supabaseUrl, supabaseKey);

export default supabase;
