import fetch from 'node-fetch';

const apiEndpoint = '';
const userName = '';
const userPassword = '';

export const fetchLoginToken = async () => {
  const res = await fetch(`${apiEndpoint}/api/login`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `grant_type=password&username=${userName}&password=${userPassword}&client_id=ANDR`,
  });
  const tokenData: any = await res.json();
  return tokenData?.access_token ?? '';
}
