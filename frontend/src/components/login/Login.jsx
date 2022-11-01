import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { LoginRoute } from "../../router/login/LoginRoute";
import { MessageSuccess, MessageError } from '../shared/molecules/AlertMessages';

export function Login() {

  const { loading, success, error, userData } = useSelector((state) => state.users.new);

  const { uniqueID, name: names, email, password } = userData;

  // Root Permission
  // "Root Permission" give us access for others secctions and actions
  // If we want an user to have the "Root Permission"
  // We must add id of user en "rootList"
  // DON'T CHANGE the variable name or structure
  const rootList = [1, 2, 3, 4, 5];

  useEffect(() => {
    if (success && rootList.includes(userData.id_user)) {
      localStorage.setItem('XMW-183DM', 'XMW-193DM');
    }
  }, [success, userData])

  // End Root Permission

  useEffect(() => {
    if (success && userData) {

      localStorage.setItem('id_user', uniqueID);
      localStorage.setItem('names', names);
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      localStorage.setItem('i-s-pa-ss', "X294-FDJKSDF-FIHSHFSD");

      window.location.reload();
    }

  }, [success, userData])

  if (success) {
    return (<>
      <MessageSuccess message="Usuario creado" />
      <h1>
        <Link to={'/home'}>Ir a explorar</Link>
      </h1>
    </>)
  }

  if (error) {
    return (<>
      <MessageError message={error} />
      <h1>
        <button className="btn btn-danger"
          onClick={() => {
            window.location.reload();
          }}
        > Reintentar</button>
      </h1>
    </>)
  }

  return (
    <>
      <LoginRoute />
    </>
  );
}