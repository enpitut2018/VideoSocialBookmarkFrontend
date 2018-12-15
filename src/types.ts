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

export default interface MakeTypes<TMapStateToProps, TDispatchProps, TOwnProps, State, IRouteParamaters> {
  TMapStateToProps: TMapStateToProps;
  TStateProps: ReturnType<TMapStateToProps>;
  TDispatchProps: TDispatchProps;
  TOwnProps: TOwnProps;
  Props: ReturnType<TMapStateToProps> &
    ResolveThunks<TDispatchProps> &
    RouteComponentProps<IRouteParamaters> &
    TOwnProps;
  State: State;
}

export function connect<Types extends MakeTypes<any, any, any, any, any>>(
  mapStateToProps: Types["TMapStateToProps"],
  mapDispatchToProps: Types["TDispatchProps"]
): any {
  return originalConnect<Types["TStateProps"], Types["TDispatchProps"], Types["TOwnProps"], ReduxStore>(
    mapStateToProps,
    mapDispatchToProps
  );
}
