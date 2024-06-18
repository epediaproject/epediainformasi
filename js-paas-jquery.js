document.getElementById('authForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const password = document.getElementById('auth_password').value;
        
        const formData = new FormData();
        formData.append('auth_password', password);

        const xhr = new XMLHttpRequest();
        xhr.open('POST', '', true); 
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                if (response.success) {
                    $('#authModal').modal('hide');
                    document.getElementById('private-apikey').type = 'text';
                    document.getElementById('btn-show-private').style.display = 'none';
                } else {
                    alert('Password salah');
                }
            }
        };
        xhr.send(formData);
    });
