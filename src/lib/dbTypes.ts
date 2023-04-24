export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      posts: {
        Row: {
          id: number
          inserted_at: string
          short: boolean | null
          updated_at: string
          url: string | null
          youtube_id: string | null
        }
        Insert: {
          id?: number
          inserted_at?: string
          short?: boolean | null
          updated_at?: string
          url?: string | null
          youtube_id?: string | null
        }
        Update: {
          id?: number
          inserted_at?: string
          short?: boolean | null
          updated_at?: string
          url?: string | null
          youtube_id?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
