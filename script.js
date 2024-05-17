function calculateAge() {
    const birthdate = document.getElementById('birthdate').value;
    if (!birthdate) return;

    const birthDate = new Date(birthdate);
    const currentDate = new Date();
    
    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = (currentDate.getMonth() - birthDate.getMonth()) + (years * 12);
    let days = Math.floor((currentDate - birthDate) / (1000 * 60 * 60 * 24));
    let hours = Math.floor((currentDate - birthDate) / (1000 * 60 * 60));
    let minutes = Math.floor((currentDate - birthDate) / (1000 * 60));
    let weeks = Math.floor(days / 7);

    // Display the results
    document.getElementById('years').textContent = `Age in years: ${years}`;
    document.getElementById('months').textContent = `Age in months: ${months}`;
    document.getElementById('weeks').textContent = `Age in weeks: ${weeks}`;
    document.getElementById('days').textContent = `Age in days: ${days}`;
    document.getElementById('hours').textContent = `Age in hours: ${hours}`;
    document.getElementById('minutes').textContent = `Age in minutes: ${minutes}`;
}
