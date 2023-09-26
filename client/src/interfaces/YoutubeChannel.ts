interface YoutubeChannel {
    id: number;
    rank: number;
    Youtuber: string;
    subscribers: number;
    "video views": number;
    category: string;
    Title: string;
    uploads: number;
    Country: string;
    Abbreviation: string;
    channel_type: string;
    video_views_rank: number;
    country_rank: number;
    channel_type_rank: number;
    video_views_for_the_last_30_days: number;
    lowest_monthly_earnings: number;
    highest_monthly_earnings: number;
    lowest_yearly_earnings: number;
    highest_yearly_earnings: number;
    subscribers_for_last_30_days: number;
    created_year: number;
    created_month: string;
    created_date: number;
    "Gross tertiary education enrollment (%)": number;
    Population: number;
    "Unemployment rate": number;
    Urban_population: number;
    Latitude: number;
    Longitude: number;
    channel_url: string;
    img_src: string;
    img_path: string;
}

export default YoutubeChannel;