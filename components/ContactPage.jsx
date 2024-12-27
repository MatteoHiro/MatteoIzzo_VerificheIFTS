import { useState } from 'react';

function ContactPage() {
    const [isFormVisible, setFormVisible] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        birthDate: '',
        education: '',
        message: ''
    });

    function openForm() {
        setFormVisible(true);
        setFormSubmitted(false);
    }

    function closeForm() {
        setFormVisible(false);
        setFormSubmitted(false);
    }

    function formValidation(event) {
        event.preventDefault();
        let errorMessages = {};

        const nameField = document.getElementById('name').value;
        const birthField = document.getElementById('birthDate').value;
        const emailField = document.getElementById('email').value;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (nameField === '') {
            errorMessages.name = 'Nome obbligatorio';
        }

        if (birthField === '') {
            errorMessages.birthDate = 'Data di nascita obbligatoria';
        }

        if (emailField === '') {
            errorMessages.email = 'Email obbligatoria';
        } else if (!emailRegex.test(emailField)) {
            errorMessages.email = 'Formato email non valido';
        }

        // Se ci sono errori, imposta gli stati e non invia il modulo
        if (Object.keys(errorMessages).length > 0) {
            setErrors(errorMessages);
            return false;
        }

        // Altrimenti, puoi procedere con la logica di invio del modulo
        console.log('Modulo inviato con successo!');

        // Resetta gli errori e nascondi il modulo
        setErrors({});
        setFormVisible(false);
        setFormSubmitted(true);
        return true;


    }

    return (
        <div className="bgContainerContact">
            <div className="formContainer">
                <div className="formHeader">
                    <h1 className='titleHeader'>
                        {formSubmitted ? 'Newsletter attivata' : 'YouShop!'}
                    </h1>
                    {isFormVisible ? (
                        <button onClick={closeForm} className="closeFormButton">X</button>
                    ) : (
                        <button onClick={openForm} className="openFormButton" type="button">
                            {formSubmitted ? "Registra un'altra mail" : 'Iscriviti alla newsletter'}

                        </button>
                    )}
                </div>
                {isFormVisible && (
                    <form className="contact-form" onSubmit={formValidation}>
                        <div className="nameContainer">
                            <label htmlFor="name">Nome:</label>
                            <input placeholder='Inserisci il tuo nome' type="text" id="name" name="name" />
                            {errors.name && <p className="error">{errors.name}</p>}
                        </div>

                        <div className="mailContainer">
                            <label htmlFor="email">Email:</label>
                            <input placeholder='Inserisci la tua email' type="email" id="email" name="email" />
                            {errors.email && <p className="error">{errors.email}</p>}
                        </div>

                        <div className="birthContainer">
                            <label htmlFor="birthDate">Data di Nascita:</label>
                            <input placeholder='Inserisci la tua data di nascita' type="date" id="birthDate" name="birthDate" />
                            {errors.birthDate && <p className="error">{errors.birthDate}</p>}
                        </div>

                        <div className="educationContainer">
                            <label htmlFor="education">Livello di Istruzione:</label>
                            <select id="education" name="education">
                                <option value="">Seleziona</option>
                                <option value="Diploma">Diploma</option>
                                <option value="Laurea">Laurea</option>
                                <option value="Master">Master</option>
                                <option value="Dottorato">Dottorato</option>
                            </select>
                            {errors.education && <p className="error">{errors.education}</p>}
                        </div>

                        <div className="messageContainer">
                            <label htmlFor="message">Messaggio:</label>
                            <textarea placeholder='Scrivi il tuo messaggio' id="message" name="message"></textarea>
                            {errors.message && <p className="error">{errors.message}</p>}
                        </div>

                        <div className="buttonContainer">
                            <button className="formButton" type="submit">Invia</button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}

export default ContactPage;
