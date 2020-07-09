import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";

const PrivateRoute = ({
  component: RouteComponent,
  LocalId,
  Name,
  Projects,

  ...rest
}) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!currentUser ? (
          <RouteComponent
            Name={Name}
            LocalId={LocalId}
            currentUser={currentUser}
            Projects={Projects}
            {...routeProps}
          />
        ) : (
          <Redirect to={"/"} />
        )
      }
    />
  );
};

export default PrivateRoute;
