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
        'x-app-id': '855c131a',
        'x-app-key': '64119f627ec38e49b4ceef8ed61f8214',
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
