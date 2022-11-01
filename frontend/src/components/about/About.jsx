import React from "react";
import '../../styles/about/about.css';

export function About() {
    return (<>
        <div className="content">
            <div className="about">

                <div className="contact">
                    <div>Contáctanos vía Instagram <br /></div>
                    <div className="button"><a className="linkInstagram" href="https://instagram.com/_miel.demaple?igshid=YmMyMTA2M2Y=" target="_blank">Miel De Maple</a></div>
                </div>

                <div className="infoAbout">
                    <div className="txt"><h2 className="sTitle">Más acerca de nosotros</h2>Miel de maple es el bazar de ropa y joyería más importante de Hidalgo.</div>
                    <div className="txt"><h3 className="sTitle">Somos parte de tu vida diaria</h3>Para garantizarte un estilo increíble, Nuestra intención es darte mercancía de calidad a los precios más bajos ofreciendo una agradable experiencia de compra.</div>
                    <div className="txt"><h3 className="sTitle">Nuestra misión</h3>Ser el el principal proveedor de ropa y joyería de la mejor calidad. Siempre orientados a dar alto valor ofreciendo bienes y servicios sobresalientes, siempre impulsados por nuestros valores.</div>
                    <div className="txt"><h3 className="sTitle">Nuestra filosofía</h3>Siempre orientados a brindar valor excepcional: calidad y precio en comparación con otros bazares e cadenas de tiendas reconocidas.</div>
                    <div className="txt"><h3 className="sTitle">Nuestra garantía</h3><h4 className="mini">Ofrecemos una garantía de satisfacción del 100%</h4><br />Nos esmeramos en que obtengas los mejores precios y brindarte un servicio de la mayor calidad. Esto nos permite garantizar al 100% la satisfacción de nuestros Socios.</div>
                </div>

            </div>
        </div>
    </>);
}
