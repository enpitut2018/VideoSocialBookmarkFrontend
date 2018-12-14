import { ResolveThunks } from "react-redux";
import { connect as originalConnect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";

export interface ReduxStore {
  entries: {
    readonly hasLoaded: boolean;
    readonly entry: any;
  };
  reduxTokenAuth: {
    currentUser: {
      readonly isSignedIn: boolean;
    };
  };
  playlists: {
    readonly playlist: any;
  };
  popup: {
    readonly flip: number;
  };
}

type ReturnType<T> = T extends ((...param: any[]) => infer R) ? R : never;

export default class Types<IMapStateToProps, IMapDispatchToProps, OwnProps, RouteParamaters> {
  public c: any;
  public connect: any;
  constructor(s: any, d: any) {
    this.connect = originalConnect<ReturnType<IMapStateToProps>, IMapDispatchToProps, OwnProps, ReduxStore>(s, d);
  }
  public Props(): ReturnType<IMapStateToProps> &
    ResolveThunks<IMapDispatchToProps> &
    RouteComponentProps<RouteParamaters> &
    OwnProps {
    return this.c;
  }
}
