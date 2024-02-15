export type Anime = {
  mal_id: number;
  url: string;
  images: {
    jpg: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
    webp: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
  trailer: {
    youtube_id: string | null;
    url: string | null;
    embed_url: string | null;
  };
  approved: boolean | null;
  titles: [
    {
      type: string | null;
      title: string | null;
    },
  ];
  title: string | null;
  title_english: string | null;
  title_japanese: string | null;
  title_synonyms: [string] | null;
  type: "TV" | "Movie" | "OVA" | "ONA" | "Special" | "Music";
  source: string | null;
  episodes: number | null;
  status: "airing" | "complete" | "upcoming";
  airing: boolean | null;
  aired: {
    from: string | null;
    to: string | null;
    prop: {
      from: {
        day: number | null;
        month: number | null;
        year: number | null;
      };
      to: {
        day: number | null;
        month: number | null;
        year: number | null;
      };
      string: string | null;
    };
  };
  duration: string | null;
  rating: "g" | "pg" | "pg13" | "r17" | "r" | "rx" | null;
  score: number | null;
  scored_by: number | null;
  rank: number | null;
  popularity: number | null;
  members: number | null;
  favorites: number | null;
  synopsis: string | null;
  background: string | null;
  season: "summer" | "spring" | "fall" | "winter" | null;
  year: number | null;
  broadcast: {
    day: string | null;
    time: string | null;
    timezone: string | null;
    string: string | null;
  };
  producers: [
    {
      mal_id: number | null;
      type: string | null;
      name: string | null;
      url: string | null;
    },
  ];
  licensors: [
    {
      mal_id: number;
      type: string;
      name: string;
      url: string;
    },
  ];
  studios: [
    {
      mal_id: number;
      type: string;
      name: string;
      url: string;
    },
  ];
  genres: [
    {
      mal_id: number;
      type: string;
      name: string;
      url: string;
    },
  ];
  explicit_genres: [
    {
      mal_id: number;
      type: string;
      name: string;
      url: string;
    },
  ];
  themes: [
    {
      mal_id: number;
      type: string;
      name: string;
      url: string;
    },
  ];
  demographics: [
    {
      mal_id: number;
      type: string;
      name: string;
      url: string;
    },
  ];
};

export type PaginationType = {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: {
    count: number;
    total: number;
    per_page: number;
  };
};

export type CommentCardType = {
  id: number;
  username: string;
  user_image: string;
  comment: string;
  createdAt: string;
};

export type CommentInputProps = {
  mal_id: string;
  user_email?: string | null;
  username?: string | null;
  user_image?: string | null;
  title: string;
  createdAt: string;
};
