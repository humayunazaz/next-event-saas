export interface IHeaderLink {
  label: string;
  route: string;
}

export interface IEventDefaultValues {
  title: string;
  description: string;
  location: string;
  imageUrl: string;
  startDateTime: Date;
  endDateTime: Date;
  categoryId: string;
  price: string;
  isFree: boolean;
  url: string;
}
