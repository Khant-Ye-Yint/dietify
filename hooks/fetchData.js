const fetchData = async (query) => {
  let data = {
    query,
    timezone: 'US/Eastern',
  };

  const res = await fetch(
    'https://trackapi.nutritionix.com/v2/natural/nutrients',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-app-id': '0399587b',
        'x-app-key': '8294f67ca8f48a280739215191488a57',
      },
      body: JSON.stringify(data),
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

export { fetchData };
