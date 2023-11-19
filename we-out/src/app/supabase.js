import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://fpiydakdmsuhzmnucyxk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZwaXlkYWtkbXN1aHptbnVjeXhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAzOTMzNDgsImV4cCI6MjAxNTk2OTM0OH0.YOVwkk5JBl91Mp2Y2yFlLIOkNKrvbJHz2XrcgaRR8U0')

export default supabase;