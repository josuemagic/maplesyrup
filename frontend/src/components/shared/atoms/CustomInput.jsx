import React from 'react';
import '../../../styles/shared/atoms/customInput/customInput.css';

export function CustomInput() {
    return (
        <>
            <div class="form__group field">
                <input type="input" className="form__field" placeholder="Name" name="name" id='name' required />
                <label for="name" className="form__label">Que estas buscando?</label>
            </div>
        </>
    )
}
