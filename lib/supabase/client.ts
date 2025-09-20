import { createClient } from '@supabase/supabase-js'
import type { Database } from '@/types/database'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

// Only create Supabase client if environment variables are properly configured
export const supabase = supabaseUrl.includes('placeholder') || supabaseAnonKey.includes('placeholder')
  ? null
  : createClient<Database>(supabaseUrl, supabaseAnonKey, {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true
      }
    })

// Helper function to check if Supabase is configured
export const isSupabaseConfigured = () => {
  return supabase !== null
}