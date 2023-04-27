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
          embed_url: string | null
          id: number
          image: string | null
          inserted_at: string
          short: boolean | null
          title: string | null
          updated_at: string
          url: string | null
          youtube_id: string | null
        }
        Insert: {
          embed_url?: string | null
          id?: number
          image?: string | null
          inserted_at?: string
          short?: boolean | null
          title?: string | null
          updated_at?: string
          url?: string | null
          youtube_id?: string | null
        }
        Update: {
          embed_url?: string | null
          id?: number
          image?: string | null
          inserted_at?: string
          short?: boolean | null
          title?: string | null
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
