import { Link, useNavigate } from "react-router-dom";
import '../../styles/not_found/NotFound.css';

function NotFound() {

  const navigate = useNavigate();

  return (
    <>
      <main id="containerNotFound">
        <form id="login_form" class="form_class" >
          <div class="form_div">
            <button class="return"
              onClick={() => {
                navigate('/home');
              }}></button>
            <label id="errorType">404</label>

            <label id="errorText">Parece que el gato tomo lo que buscas</label>
            <label id="errorText">Puedes esperar a que te lo devuelva pero</label>
            <label class="justify">Deberias acariciarlo para regresar</label>
          </div>

        </form>
      </main>
    </>


  )
}

export default NotFound
