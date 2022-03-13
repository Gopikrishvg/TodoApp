import axios from 'axios';

async function request(options: any) {
  return await axios(options)
    .then(response => {
      console.log('axios response --->', response);
      return response;
    })
    .catch(error => {
      console.log('axios error --->', error);
      return error;
    });
}

async function getRequest(url: string) {
  console.log('get request..', url);
  let response;
  let header = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ClientId: '-1',
  };

  const requestOptions = {
    url: url,
    method: 'get',
    headers: header,
    timeout: 1000 * 5,
  };
  response = await request(requestOptions);
  return response;
}

async function postRequest(url: string, params: any) {
  console.log('post request...', url, params);

  let response;
  const header = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  const requestOptions = {
    url: url,
    method: 'POST',
    headers: header,
    data: params,
    timeout: 1000 * 5,
  };
  response = await request(requestOptions);
  return response;
}

async function putRequest(url: string, params: any) {
  console.log('put request...');
  let response;
  const header = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  const requestOptions = {
    url: url,
    method: 'PUT',
    headers: header,
    data: params,
    timeout: 1000 * 5,
  };
  response = await request(requestOptions);
  return response;
}

async function deleteRequest(url: string) {
  // console.log('delete request...');
  let response;
  const header = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  const requestOptions = {
    url: url,
    method: 'DELETE',
    headers: header,
    timeout: 1000 * 5,
  };
  response = await request(requestOptions);
  return response;
}

export {getRequest, postRequest, putRequest, deleteRequest};
