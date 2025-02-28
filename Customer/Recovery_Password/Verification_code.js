const inputs = document.querySelectorAll('.input-group input');
        inputs.forEach((input, index) => {
            input.addEventListener('input', (event) => {
                const value = event.target.value;
                if (value && index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            });
            input.addEventListener('keydown', (e) => {
                const value = e.target.value;
                if (e.key === 'Backspace') {
                    if (!value && index > 0) {
                        inputs[index - 1].focus();
                    } else {
                        input.value = ''; 
                    }
                }
            });
        });