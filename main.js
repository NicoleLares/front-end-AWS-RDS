// Función para poblar la tabla con los registros
function populateTable(records) {
    const tbody = document.querySelector('#recordsTable tbody');
    tbody.innerHTML = ''; // Limpiar la tabla

    records.forEach(record => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${record.Code}</td>
            <td>${record.Name}</td>
            <td>${record.Continent}</td>
            <td>${record.Region}</td>
	    <td>${record.SurfaceArea}</td>
            <td>${record.Population}</td>

        `;
        tbody.appendChild(row);
    });
}
// Función para consultar todos los registros
function getAllRecords() {
    fetch('http://34.229.182.73/php-intro-connection/getRecords.php') // Cambia localhost a tu IP pública
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la respuesta de la red: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            populateTable(data);
        })
        .catch(error => console.error('Error:', error));





}