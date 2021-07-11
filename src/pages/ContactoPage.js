const ContactoPage = (props) =>  {
    return (

        <main className="holder">
            <div className="columna contacto">
                <h2>Complete el siguiente formulario</h2>
                <form action="" method="" className="formulario">
                    <p>
                        <label>Nombre:</label>
                        <input type="text" name="nombre" placeholder="Nombre y Apellido"/>
                    </p>
                    <p>
                        <label>Email:</label>
                        <input type="email" name="email" placeholder="correo electrónico"/>
                    </p>
                    <p>
                        <label>Teléfono:</label>
                        <input type="text" name="telefono" placeholder="celular"/>
                    </p>
                    <p>
                        <label>Comentario:</label>
                        <textarea name="mensaje"></textarea>
                    </p>
                    <p className="centrar"><input type="submit" value="Enviar"/>
                    </p>
                </form>
            </div>
            <div className="columna datos">
                <h2>Otras vias de contacto</h2>
                <p>También puede contactarse con nosotros usando los siguientes medios:</p>
                <ul>
                    <li>Teléfono: 012-3456-7890</li>
                    <li>email: xxx@xvia.com</li>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Skype</li>
                    <li>Twitter</li>
                </ul>
            </div>
        </main>



        )

}
export default ContactoPage;