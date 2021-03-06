/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  VideoScreen:undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Explore: undefined;
  Add: undefined;
  Subscription: undefined;
  Library: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type User={
  name:string;
  image?:string;
};

export type Video={
  id:string;
  createdAt:string,
  title:string,
  thumbnail:string,
  videoUrl:string,
  duration:number;
  user:User;
  views:number;

}

export type VideoCommentType={
  id:string;
  createdAt:string;
  comment:string;
  likes:number;
  dislikes:number;
  replies:number;
  user:User;
}
