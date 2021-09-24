import { useState, useEffect } from "react";
import withApollo from "../hoc/withApollo";
import { useLazyGetUser } from "../apollo/actions";

function HeaderBar2() {
  const [user, setUser] = useState(null);
  const [hasResponse, setHasResponse] = useState(false);
  const [getUser, { data, error }] = useLazyGetUser();
  useEffect(() => {
    getUser();
  }, []);

  if (data) {
    if (data.user && !user) {
      setUser(data.user);
    }
    if (!data.user && user) {
      setUser(null);
    }
    if (!hasResponse) {
      setHasResponse(true);
    }
  }

  function toggleBurgerMenu() {
    document.querySelector("#navbarBasicExample").classList.toggle("is-active"); //.navbar-menu"
  }

  return (
    <div className="has-background-black">
      {hasResponse && (
        <div className="navbar-item  is-dark">
          {user && (
            <>
              <span className="nav-link mr-4">Welcome {user.username}</span>
            </>
          )}
          {(error || !user) && (
            <>
              <div className="navbar-item"></div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default withApollo(HeaderBar2);
