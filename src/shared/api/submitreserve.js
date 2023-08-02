export const submitReserve = async ({name, email, size}) => {
  const response = await fetch(`https://formsubmit.co/ajax/bdb4270190712c74720c3f60c05f26a1`, {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        name: name,
        email: email,
        size: size,
    })
  });
  let res;
  if (response.ok) {
		res = response.json();
	} else {
		return Promise.reject(`Ошибка: ${res.status}`);
	}
	return res;
};
