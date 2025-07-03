import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yphwamxupyfnjjqqkxxe.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlwaHdhbXh1cHlmbmpqcXFreHhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0NTMzOTQsImV4cCI6MjA2NzAyOTM5NH0.QsZepZqfa3j_1FKNHHGVPRwR7VjMA3BucnHxAVmWgKo';

export const supabase = createClient(supabaseUrl, supabaseKey);