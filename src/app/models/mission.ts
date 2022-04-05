
interface ILinks{
  mission_patch: string,
  mission_patch_small: string,
  reddit_campaign: any,
  reddit_launch: any,
  reddit_recovery: any,
  reddit_media: any,
  presskit: any,
  article_link: string,
  wikipedia: string,
  video_link: string,
  youtube_id: string,
  flickr_images: any
}
interface ILaunchSite{
  site_id: string,
  site_name: string,
  site_name_long: string
}
interface IRocket{
  rocket_id: string,
  rocket_name: string,
  rocket_type: string,
  first_stage: any,
  second_stage: any,
  fairings: any
}

export interface ISpacexData{
  flight_number: number,
  mission_name: string,
  mission_id: any,
  launch_year: string,
  launch_date_unix: number,
  launch_date_utc: string,
  launch_date_local: string,
  is_tentative: boolean,
  tentative_max_precision: string,
  tbd: boolean,
  launch_window: number,
  rocket: any,
  ships: any,
  telemetry: any,
  launch_site: ILaunchSite,
  launch_success: boolean,
  launch_failure_details: any,
  links: ILinks,
  details: string,
  upcoming: boolean,
  static_fire_date_utc: any,
  static_fire_date_unix: any,
  timeline: any,
  crew: any
}
