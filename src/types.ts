import { ResolveThunks } from "react-redux";
import { connect as originalConnect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { Store } from "./reducers";

export type ErrorMessage = any;

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
  return originalConnect<Types["TStateProps"], Types["TDispatchProps"], Types["TOwnProps"], Store>(
    mapStateToProps,
    mapDispatchToProps
  );
}
