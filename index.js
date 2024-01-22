async function generateTable() {
  try {
    const response = await fetch("data.json");
    const data = await response.json();

    const teams = Object.keys(data);
    const table = document.getElementById("head-to-head-table");

    //header row
    const headerRow = table.insertRow();
    const headerCell = headerRow.insertCell();
    headerCell.textContent = "Tm";
    headerCell.classList.add("header");
    for (const team of teams) {
      const cell = headerRow.insertCell();
      cell.textContent = team;
      cell.classList.add("header");
    }

    //table rows
    for (const team1 of teams) {
      const row = table.insertRow();
      const cell = row.insertCell();
      cell.textContent = team1;
      for (const team2 of teams) {
        const wins = data[team1][team2]?.W || " ";
        const cell = row.insertCell();
        cell.textContent = wins;
      }
    }

    //bottom row
    const bottomHeaderRow = table.insertRow();
    const bottomHeaderCell = bottomHeaderRow.insertCell();
    bottomHeaderCell.textContent = "Tm";
    bottomHeaderCell.classList.add("header");
    for (const team of teams) {
      const cell = bottomHeaderRow.insertCell();
      cell.textContent = team;
      cell.classList.add("header");
    }
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
  }
}

generateTable();
