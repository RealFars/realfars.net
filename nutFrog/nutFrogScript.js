document.getElementById("leftButton").addEventListener("click", function() {
    let event = new KeyboardEvent("keydown", {
        key: "ArrowLeft",
        keyCode: 37,
        code: "ArrowLeft",
        which: 37,
        bubbles: true
    });

    document.getElementById("nutFrame").focus();
    document.getElementById("nutFrame").contentWindow.dispatchEvent(event);
});

const { data, error } = await supabase
  .from('highscore')
  .select()

  import { createClient } from '@supabase/supabase-js';

        const supabase = createClient('SUPABASE_URL', 'public-anon-key');

        async function fetchData() {
            const { data, error } = await supabase
                .from('highscore')
                .select();

            if (error) {
                console.error('Error fetching data:', error);
                return;
            }

            createTable(data);
        }

        function createTable(data) {
            const tableContainer = document.getElementById('table-container');
            const table = document.createElement('table');

            // Create table header
            const thead = document.createElement('thead');
            const headerRow = document.createElement('tr');
            const headers = ['ID', 'Name', 'Score'];
            headers.forEach(headerText => {
                const th = document.createElement('th');
                th.textContent = headerText;
                headerRow.appendChild(th);
            });
            thead.appendChild(headerRow);
            table.appendChild(thead);

            // Create table body
            const tbody = document.createElement('tbody');
            data.forEach(item => {
                const row = document.createElement('tr');
                Object.values(item).forEach(text => {
                    const td = document.createElement('td');
                    td.textContent = text;
                    row.appendChild(td);
                });
                tbody.appendChild(row);
            });
            table.appendChild(tbody);

            tableContainer.appendChild(table);
        }

        fetchData();