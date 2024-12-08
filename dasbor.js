document.addEventListener('DOMContentLoaded', () => {
    const filterKabupaten = document.getElementById('filterKabupaten');
    const tableBody = document.getElementById('tableBody');

    // Simpan data asli dari tabel
    const originalRows = Array.from(tableBody.rows);

    // Fungsi untuk memfilter tabel
    function filterTable() {
        const selectedValue = filterKabupaten.value;

        // Filter berdasarkan pilihan di dropdown
        const filteredRows = originalRows.filter(row => {
            const kabupaten = row.getAttribute('data-kabupaten');
            return selectedValue === 'all' || kabupaten === selectedValue;
        });

        // Bersihkan tabel dan tambahkan baris yang sesuai
        tableBody.innerHTML = '';
        filteredRows.forEach(row => tableBody.appendChild(row));
    }

    // Event listener untuk dropdown
    filterKabupaten.addEventListener('change', filterTable);

    // Inisialisasi filter pertama kali saat halaman dimuat
    filterTable();
});
