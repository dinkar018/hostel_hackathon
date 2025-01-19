document.addEventListener('DOMContentLoaded', () => {
    const domainDropdown = document.getElementById('domain');
    const subdomainDropdown = document.getElementById('subdomain');
    const form = document.getElementById('maintenanceForm');
  
    // Update subdomain options based on domain
    domainDropdown.addEventListener('change', () => {
      const domain = domainDropdown.value;
      let subdomains = '';
  
      if (domain === 'civil') {
        subdomains = `
          <option value="wallcrack">Wall Crack</option>
          <option value="roofleak">Roof Leakage</option>
          <option value="floorissues">Floor Issues</option>
        `;
      } else if (domain === 'electrical') {
        subdomains = `
          <option value="poweroutage">Power Outage</option>
          <option value="lighting">Lighting Issues</option>
          <option value="shortcircuit">Short Circuit</option>
        `;
      }
  
      subdomainDropdown.innerHTML = `<option selected disabled>Choose Subdomain</option>${subdomains}`;
    });
  
    // Submit form
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
  
      fetch('http://localhost:3000/complain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData)),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            alert('Complaint submitted successfully!');
            form.reset();
          } else {
            alert('Submission failed!');
          }
        })
        .catch((err) => alert('Error submitting form.'),
    console.log(err));
    });
  });
  
  
  